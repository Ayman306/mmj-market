import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/service/api.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { AsyncPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/service/shared.service';
import { TimeAgoPipe } from '../../utils/time-ago.pipe';
import { JobcardComponent } from '../../shared/components/jobcard/jobcard.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-jobs',
  standalone: true,
  imports: [AsyncPipe, JobcardComponent, UpperCasePipe, FormsModule],
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.scss',
})
export class AllJobsComponent implements OnInit {
  constructor(private _apiService: ApiService, private route: Router, private shared: SharedService) { }
  jobPost$!: Observable<any[]>;
  private searchSubject: Subject<string> = new Subject();
  options = [
    { label: 'Anytime', value: 'anytime' },
    { label: 'Past 24 hours', value: '24 hours' },
    { label: 'Past weeek', value: 'week' },
    { label: 'Past month', value: 'month' },
  ];
  filterOption = {
    search: '',
    filter: ''
  }
  sortJobBy: string = '';

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(500)).subscribe((searchText) => {
      this.logSearch(searchText);
    });

    this.getAllJobs()
  }

  socials = this.shared.socialIcons

  features = this.shared.jobFeatures

  getAllJobs(data?: {}) {
    this.jobPost$ = this._apiService.getAllJobs(data).pipe(
      map((response: any) => response?.result?.map((res: any) => ({
        ...res.jobpost.contact_detail,
        ...res.jobpost.job_detail,
        logo: '../../../assets/mmj_logo.png'
      })))
    );
  }
  jobDetail(id?: string) {
    if (id) {
      this.route.navigate(['/service'], {
        queryParams: { job: id }
      });
    } else {
      this.route.navigate(['/all-service'], {
        queryParams: { job: 'all-job' }
      });

    }
  }

  onSearch(event: any) {
    const searchText = event.target.value;
    this.searchSubject.next(searchText); // Emit the search text to the subject
  }

  logSearch(searchText: string) {
    console.log('Searched text:', searchText);
    this.filterOption.search = searchText;
    this.getAllJobs(this.filterOption)
  }

  onSelect(option: any) {
    this.sortJobBy = option.value;
    this.filterOption.filter = option.value;
    this.getAllJobs(this.filterOption)
    console.log('Selected value:', this.sortJobBy);
  }
}

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
    { label: 'Past 24 hours', value: 'new' },
    { label: 'Past weeek', value: 'past_week' },
    { label: 'Past month', value: 'past_month' },
  ];

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(500)).subscribe((searchText) => {
      this.logSearch(searchText);
    });

    this.jobPost$ = this._apiService.getAllJobs().pipe(
      map((response: any) => response?.result?.map((res: any) => ({
        ...res.jobpost.contact_detail,
        ...res.jobpost.job_detail,
        logo: '../../../assets/mmj_logo.png'
      })))
    );
  }

  socials = this.shared.socialIcons

  features = this.shared.jobFeatures

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
  }
  selectedValue: string = '';

  onSelect(option: any) {
    this.selectedValue = option.value;
    console.log('Selected value:', this.selectedValue);
  }
}

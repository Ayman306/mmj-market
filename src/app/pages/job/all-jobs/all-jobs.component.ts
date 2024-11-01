import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/service/api.service';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, map, catchError } from 'rxjs/operators';
import { AsyncPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/service/shared.service';
import { TimeAgoPipe } from '../../../utils/time-ago.pipe';
import { JobcardComponent } from '../../../shared/components/jobcard/jobcard.component';
import { FormsModule } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-all-jobs',
  standalone: true,
  imports: [AsyncPipe, JobcardComponent, UpperCasePipe, FormsModule],
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.scss',
})
export class AllJobsComponent implements OnInit {
  constructor(private _apiService: ApiService, private route: Router, private shared: SharedService,
    private toaster: NgToastService
  ) { }
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
        ...res,
        logo: '../../../assets/mmj_logo.png'
      }))),
      // Add error handling
      catchError((error) => {
        this.toaster.danger('Server error');
        return of([]); // Return an empty array on error
      })
    );
    if (!data) {
      this.toaster.success('Newly Uploaded jobs', 'Open Vacancies!'); // Moved outside the pipe
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

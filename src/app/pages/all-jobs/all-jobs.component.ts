import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/service/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/service/shared.service';

@Component({
  selector: 'app-all-jobs',
  standalone: true,
  imports: [AsyncPipe, TitleCasePipe],
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.scss',
})
export class AllJobsComponent implements OnInit {
  constructor(private _apiService: ApiService, private route: Router, private shared: SharedService) { }
  jobPost$!: Observable<any[]>;

  ngOnInit(): void {
    this.jobPost$ = this._apiService.getAllJobs().pipe(
      map((response: any) => response?.result?.map((res: any) => ({
        ...res.jobpost.contact_details,
        ...res.jobpost.job_detail,
        logo: '../../../assets/mmj_logo.png'
      })))
    );
  }

  socials = this.shared.socialIcons

  features = this.shared.jobFeatures

  jobDetail(id: string) {
    this.route.navigate(['/service'], {
      queryParams: { job: id }
    });
  }
}
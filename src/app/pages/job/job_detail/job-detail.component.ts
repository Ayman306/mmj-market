import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../../../shared/components/slider/slider.component';
import { EnquiryFormComponent } from '../../../shared/components/enquiry-form/enquiry-form.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { DetailsTabComponent } from '../../../shared/components/details-tab/details-tab.component';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../shared/service/api.service';

@Component({
  selector: 'job-detail',
  standalone: true,
  imports: [FooterComponent, DetailsTabComponent, TitleCasePipe],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss'
})
export class JobDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  logo = ['hello']
  tab = [
    'Overview'
  ]
  type = "job"
  serviceId = ""
  jobDetail: any
  contactDetail: any
  serviceDetail: any
  ngOnInit(): void {
    let service: any
    this.route.queryParamMap.subscribe(params => {
      const serviceQueryParam = params?.get('service');
      const jobQueryParam = params?.get('job');

      if (serviceQueryParam) {
        service = { id: serviceQueryParam, type: 'business' }
      } else if (jobQueryParam) {
        service = { id: jobQueryParam, type: 'job' }
      } else {
        service = { id: '', type: '' }
      }
    });
    this.getServiceDetail(service)
  }

  getServiceDetail(service: { id: string, type: string }) {
    switch (service.type) {
      case 'job':
        let body = { id: service.id.toString() }
        this.apiService.getAllJobs(body).subscribe((res) => {
          this.serviceDetail = res[0]?.jobpost?.job_detail
          this.jobDetail = res[0]?.jobpost?.job_detail
          this.contactDetail = res[0]?.jobpost?.contact_detail
        })
        break

    }
  }
  openJob(url: string) {
    if (url) {
      const fullUrl = url.startsWith('http') ? url : 'http://' + url;
      window.open(fullUrl, '_blank');
    }
  }
}

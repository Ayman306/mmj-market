import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../../../shared/components/slider/slider.component';
import { EnquiryFormComponent } from '../../../shared/components/enquiry-form/enquiry-form.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { DetailsTabComponent } from '../../../shared/components/details-tab/details-tab.component';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../shared/service/api.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'job-detail',
  standalone: true,
  imports: [FooterComponent, DetailsTabComponent, TitleCasePipe],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.scss'
})
export class JobDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: ApiService, private toaster: NgToastService) { }
  logo = ['hello']
  tab = [
    'Overview'
  ]
  type = "job"
  serviceId = ""
  jobDetail: any
  contactDetail: any
  serviceDetail: any
  recruterContact: any[] = []
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
        this.apiService.getAllJobs(body).subscribe({
          next: (res) => {
            this.jobDetail = res[0]

            this.recruterContact = this.jobDetail?.contact_type?.map((res: string) => {
              if (res === 'whatsapp') {
                return { label: 'WhatsApp', value: this.jobDetail?.wa_number };
              } else if (res === 'email') {
                return { label: 'Email', value: this.jobDetail?.email };
              } else if (res === 'phone') {
                return { label: 'Phone', value: this.jobDetail?.phone_number };
              }
              return null;
            }).filter((contact: any) => contact !== null);

            // }
          },
          error: (err) => {
            this.toaster.danger('Server error' + err)
          }
        })
        // })
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

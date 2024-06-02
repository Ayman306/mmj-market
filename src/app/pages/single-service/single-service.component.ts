import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../../shared/components/slider/slider.component';
import { EnquiryFormComponent } from '../../shared/components/enquiry-form/enquiry-form.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { DetailsTabComponent } from '../../shared/components/details-tab/details-tab.component';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/service/api.service';

@Component({
  selector: 'app-single-service',
  standalone: true,
  imports: [SliderComponent,EnquiryFormComponent,FooterComponent,DetailsTabComponent,NgOptimizedImage],
  templateUrl: './single-service.component.html',
  styleUrl: './single-service.component.scss'
})
export class SingleServiceComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService:ApiService){}
categorySlider=[
    { src: '../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg', alt: 'Slide 1' }
]
businessImage=[
  {
    src:'../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg'
  },
  {
    src:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg'
  },
  {
    src:'../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg'
  }
  ,
  {
    src:'../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg'
  },
  {
    src:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg'
  },{
    src:'../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg'
  }
]
slides: any[][] = [];
type="job"
serviceId=""
jobDetail:any
contactDetail:any
masterData:any
ngOnInit(): void {
  // this.slides = this.chunk(this.businessImage, 2);

  this.route.queryParamMap.subscribe(params => {
    const queryParam = params.get('service');
    this.serviceId = params.get('id') || '';
    this.type = queryParam?.toLowerCase() || '';
  });
  this.getServiceDetail()
}

getServiceDetail(){
  if(this.type=='job'){
    let body = {id:this.serviceId.toString()}
    this.apiService.getAllJobs(body).subscribe((res)=>{
      this.masterData = res[0]
      this.jobDetail = res[0]?.jobpost?.job_detail
      this.contactDetail = res[0]?.jobpost?.contact_details
      console.log(this.jobDetail,'jobdewtails')
      console.log(this.contactDetail,'contact details')
    })
  }
}

chunk(arr: any[], size: number): any[][] {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
}

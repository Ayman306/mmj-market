import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../../shared/slider/slider.component';
import { EnquiryFormComponent } from '../../shared/enquiry-form/enquiry-form.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DetailsTabComponent } from '../../shared/details-tab/details-tab.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-single-service',
  standalone: true,
  imports: [SliderComponent,EnquiryFormComponent,FooterComponent,DetailsTabComponent,NgOptimizedImage],
  templateUrl: './single-service.component.html',
  styleUrl: './single-service.component.scss'
})
export class SingleServiceComponent implements OnInit {

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
ngOnInit(): void {
  this.slides = this.chunk(this.businessImage, 2);
}

chunk(arr: any[], size: number): any[][] {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
type="job"
}

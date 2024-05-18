import { Component } from '@angular/core';
import { SliderComponent } from '../../shared/slider/slider.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServicecardComponent } from '../../shared/servicecard/servicecard.component';
import {  Router } from '@angular/router';
import { EnquiryFormComponent } from '../../shared/enquiry-form/enquiry-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,ServicecardComponent,EnquiryFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 constructor(private route:Router){}

categories=[
  {
    logo:'../../../assets/icons/icons8-restaurant-50.png',
    name:'Restaurants',
    id:1
  },
  {
    logo:'../../../assets/icons/icons8-restaurant-50.png',
    name:'Restaurants',
    id:2
  },
  {
    logo:'../../../assets/icons/icons8-restaurant-50.png',
    name:'Restaurants',
    id:3
  },
  {
    logo:'../../../assets/icons/icons8-restaurant-50.png',
    name:'Restaurants',
    id:4
  },
  {
    logo:'../../../assets/icons/icons8-restaurant-50.png',
    name:'Restaurants',
    id:5
  },
  {
    logo:'../../../assets/icons/icons8-restaurant-50.png',
    name:'Restaurants',
    id:6
  },{
    logo:'../../../assets/icons/icons8-restaurant-50.png',
    name:'Restaurants',
    id:7
  },
  {
    logo:'../../../assets/icons/icons8-restaurant-50.png',
    name:'Restaurants',
    id:8
  }
]
banner=[
  {
    username:'Fashionista',
    location:'Surathkal-Mangalore',
        userImage:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
    image:'../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
    button:'Know More'
  },
  {
    username:'Fashionista',
    location:'Surathkal-Mangalore',
    userImage:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
    image:'../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
    button:'Know More'
  },
  {
    username:'Fashionista',
    location:'Surathkal-Mangalore',
    image:'../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg',
        userImage:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
    button:'Know More'
  },
  {
    username:'Fashionista',
    location:'Surathkal-Mangalore',
    image:'../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg',
        userImage:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
    button:'Know More'
  },
  {
    username:'Fashionista',
    location:'Surathkal-Mangalore',
    image:'../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg',
        userImage:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
    button:'Know More'
  },
  {
    username:'Fashionista',
    location:'Surathkal-Mangalore',
    image:'../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg',
        userImage:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
    button:'Know More'
  },
]
carouselImages = [
  { src: '../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg', alt: 'Slide 1' },
  { src: '../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg', alt: 'Slide 2' },
  { src: '../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg', alt: 'Slide 3' }
];

navigateTo(type:string,index:any){
  if(type=='category'){
    this.route.navigate(['/all-service'],{queryParams: { id: index }})
  }else{
    this.route.navigate(['/service'],{queryParams: { id: index }})
  }
}


}

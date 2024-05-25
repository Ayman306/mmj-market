import { Component } from '@angular/core';
import { ServicecardComponent } from '../../shared/servicecard/servicecard.component';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-service',
  standalone: true,
  imports: [ServicecardComponent, TitleCasePipe],
  templateUrl: './all-service.component.html',
  styleUrl: './all-service.component.scss'
})
export class AllServiceComponent {
  banner=[
    {
      username:'Fashionista',
      location:'Surathkal-Mangalore',
          userImage:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      image:'../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg',
      desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
      button:'Know More'
    },
    {
      username:'Fashionista',
      location:'Surathkal-Mangalore',
          userImage:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      image:'../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg',
      desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
      button:'Know More'
    },
    {
      username:'Fashionista',
      location:'Surathkal-Mangalore',
          userImage:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      image:'../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg',
      desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
      button:'Know More'
    },
    {
      username:'Fashionista',
      location:'Surathkal-Mangalore',
          userImage:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      image:'../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg',
      desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
      button:'Know More'
    },
    {
      username:'Fashionista',
      location:'Surathkal-Mangalore',
          userImage:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      image:'../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg',
      desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
      button:'Know More'
    },
    {
      username:'Fashionista',
      location:'Surathkal-Mangalore',
          userImage:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      image:'../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg',
      desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
      button:'Know More'
    },
    {
      username:'Fashionista',
      location:'Surathkal-Mangalore',
          userImage:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      image:'../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg',
      desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
      button:'Know More'
    },
    {
      username:'Fashionista',
      location:'Surathkal-Mangalore',
          userImage:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      image:'../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg',
      desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
      button:'Know More'
    },

  ]
  type = 'jobs'
  constructor(private route:Router) {}
navigateTo(index:any){

    this.route.navigate(['/service'],{queryParams: { id: index }})

}
}

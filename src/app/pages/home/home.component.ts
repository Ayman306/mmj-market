import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../shared/components/slider/slider.component';
import { ServicecardComponent } from '../../shared/components/servicecard/servicecard.component';
import { Router } from '@angular/router';
import { EnquiryFormComponent } from '../../shared/components/enquiry-form/enquiry-form.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NgOptimizedImage } from '@angular/common';
import { ApiService } from '../../shared/service/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SliderComponent,
    ServicecardComponent,
    FooterComponent,
  ],
  providers: [ApiService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private route: Router,
    private apiService: ApiService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getAllCategory();
    // this.toaster.success("Welcome!")
  }

  categories: any;

  getAllCategory() {
    this.spinner.show();
    this.apiService.getCategory().subscribe(
      (res) => {
        this.categories = res;
        this.spinner.hide();
      },
      (err) => {
        console.log(err);
        this.spinner.hide();
      }
    );
  }

  banner = [
    {
      username: 'Fashionista',
      location: 'Surathkal-Mangalore',
      userImage: '../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      image: '../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
      button: 'Know More',
    },
    {
      username: 'Fashionista',
      location: 'Surathkal-Mangalore',
      userImage: '../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      image: '../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
      button: 'Know More',
    },
    {
      username: 'Fashionista',
      location: 'Surathkal-Mangalore',
      image: '../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg',
      userImage: '../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
      button: 'Know More',
    },
    {
      username: 'Fashionista',
      location: 'Surathkal-Mangalore',
      image: '../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg',
      userImage: '../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
      button: 'Know More',
    },
    {
      username: 'Fashionista',
      location: 'Surathkal-Mangalore',
      image: '../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg',
      userImage: '../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
      button: 'Know More',
    },
    {
      username: 'Fashionista',
      location: 'Surathkal-Mangalore',
      image: '../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg',
      userImage: '../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi optio eveniet debitis quibusdam suscipit provident ut.  ',
      button: 'Know More',
    },
  ];
  carouselImages = [
    {
      src: '../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg',
      alt: 'Slide 1',
    },
    {
      src: '../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      alt: 'Slide 2',
    },
    {
      src: '../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg',
      alt: 'Slide 3',
    },
  ];

  navigateTo(type: any) {
    if (type?.key == 'job') {
      this.route.navigate(['/jobs']);
    } else {
      this.route.navigate(['/all-service'], {
        queryParams: { service: type?.id },
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ServicecardComponent } from '../../shared/components/servicecard/servicecard.component';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/service/api.service';
import { JobcardComponent } from '../../shared/components/jobcard/jobcard.component';

@Component({
  selector: 'app-all-service',
  standalone: true,
  imports: [ServicecardComponent, TitleCasePipe, JobcardComponent],
  templateUrl: './all-service.component.html',
  styleUrl: './all-service.component.scss',
})
export class AllServiceComponent implements OnInit {
  banner = [
    {
      username: 'Fashionista',
      location: 'Surathkal-Mangalore',
      userImage: '../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      image: '../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg',
      company: 'Infotech',
      city: 'Mangalore',
      state: 'Karnatka',
      postedAt: '02-03-2024',
      employment_type: 'Full-time',
    },
    {
      username: 'Fashionista',
      location: 'Surathkal-Mangalore',
      userImage: '../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg',
      image: '../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg',
      company: 'Infotech',
      city: 'Mangalore',
      state: 'Karnatka',
      postedAt: '02-03-2024',
      employment_type: 'Full-time',
    },
  ];

  categoryType: any;
  service = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }
  ngOnInit(): void {
    let serviceType: any
    this.route.queryParamMap.subscribe((params) => {
      const serviceQueryParam = params?.get('service');

      serviceType = { id: serviceQueryParam || '' };
    });
    this.getAllservices(serviceType);
  }
  getAllservices(serviceType?: { id: string }) {


  }
  navigateTo(index: any) {
    this.router.navigate(['/service'], { queryParams: index });
  }
}

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

  categoryId: any;
  categoryType: any;
  service = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }
  ngOnInit(): void {
    let categoryId: any
    this.route.queryParamMap.subscribe((params) => {
      const serviceQueryParam = params?.get('service');
      const jobQueryParam = params?.get('job');

      if (serviceQueryParam) {
        categoryId = { id: serviceQueryParam || '', type: 'business' };
      } else if (jobQueryParam) {
        categoryId = { id: jobQueryParam || '', type: 'job' };
      }

      console.log(categoryId);
    });
    this.getAllservices(categoryId);
  }
  getAllservices(categoryId: { id: string, type: string }) {
    console.log(categoryId);
    this.apiService.getCategory(categoryId).subscribe((res) => {
      this.categoryType = res[0];
      console.log(this.categoryType);
      switch (this.categoryType?.key) {
        case 'job':
          {
            let body = { status: true };
            this.apiService.getAllJobs(body).subscribe((res) => {
              this.service = res?.result;
              console.log(res);
            });
          }
          break;
      }
    });
  }
  navigateTo(index: any) {
    this.router.navigate(['/service'], { queryParams: { service: index } });
  }
}

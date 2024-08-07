import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() { }
  socialIcons = [
    {
      icon: '../../../assets/icons/social icons/fb-svg.svg',
    },
    {
      icon: '../../../assets/icons/social icons/ig-svg.svg',
    },
    {
      icon: '../../../assets/icons/social icons/linkdn-svg.svg',
    },
    {
      icon: '../../../assets/icons/social icons/wa-svg.svg',
    },
    {
      icon: '../../../assets/icons/social icons/X-svg.svg',
    },
  ];
  jobFeatures = [
    {
      title: 'Customer service',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      title: '140+',
      description: 'Open Positions'
    },
    {
      title: '19k+',
      description: 'Active  service profiles'
    },
  ]

}

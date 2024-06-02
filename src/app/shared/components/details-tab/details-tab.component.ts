import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig, LightboxModule } from 'ngx-lightbox';

@Component({
  selector: 'app-details-tab',
  standalone: true,
  imports: [TitleCasePipe,LightboxModule,NgOptimizedImage],
  templateUrl: './details-tab.component.html',
  styleUrl: './details-tab.component.scss'
})
export class DetailsTabComponent implements OnInit{
  @Input() details:any
  constructor(private _lightbox: Lightbox, private _lightboxConfig: LightboxConfig){
    this._lightboxConfig.fadeDuration = 1;
    this._lightboxConfig.disableScrolling = true;
    this._lightboxConfig.centerVertically=true
    this._lightboxConfig.fitImageInViewPort=true
    this._lightboxConfig.showDownloadButton=true
    this._lightboxConfig.wrapAround=true
    this._lightboxConfig.alwaysShowNavOnTouchDevices=true


  }
  ngOnInit(): void {
    this.loadAlbum()

  }
tabs =[
  'Overview',
  'Photos',
  'About'
]
active=this.tabs[0]

imageList=[
  {
    src:'../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg'
  },
  {
    src:'../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg'
  },
  {
    src:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg'
  },
  {
    src:'../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg'
  },
  {
    src:'../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg'
  },
  {
    src:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg'
  },
  {
    src:'../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg'
  },
  {
    src:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg'
  },
  {
    src:'../../../assets/images/force-majeure-00tlC0Clfrs-unsplash.jpg'
  },
  {
    src:'../../../assets/images/redcharlie-mugDbuNnbd0-unsplash.jpg'
  },
  {
    src:'../../../assets/images/martin-pechy-Rp2fQv6AM44-unsplash.jpg'
  }
]
albums:any[] =[]
loadAlbum(){
  this.albums = this.imageList.map(image => ({
    src: image.src,
    thumb: image.src,
    caption: 'hhh'
  }));

}

open(index: number): void {
  // open lightbox
  this._lightbox.open(this.albums, index);
  console.log(this.albums[index]);
  console.log(index);
}

close(): void {
  // close lightbox programmatically
  this._lightbox.close();
}
}

import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input() sliderItem :any
}

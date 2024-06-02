import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobcard',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './jobcard.component.html',
  styleUrl: './jobcard.component.scss'
})
export class JobcardComponent implements AfterViewInit{
  @Input() item:any
constructor(private route:Router) {}
media:any
  ngAfterViewInit(): void {
      this.media = JSON.parse( this.item.jobpost.job_detail.media)
      console.log(this.media)
  }
  navigateTo(index:any){
 console.log(index,'kk')
    this.route.navigate(['/service'],{queryParams: {service:"job", id: index}})

}
}

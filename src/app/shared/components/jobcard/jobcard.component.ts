import { DatePipe, TitleCasePipe } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TimeAgoPipe } from '../../../utils/time-ago.pipe';

@Component({
  selector: 'app-jobcard',
  standalone: true,
  imports: [DatePipe, TitleCasePipe, TimeAgoPipe],
  templateUrl: './jobcard.component.html',
  styleUrl: './jobcard.component.scss'
})
export class JobcardComponent implements AfterViewInit {
  @Input() item: any
  constructor(private route: Router) { }
  media: any
  ngAfterViewInit(): void {
    // this.media = JSON.parse(this.item.jobpost.job_detail.media)
    // console.log(this.media)
    console.log(this.item);

  }
  navigateTo(index: any) {
    console.log(index, 'kk')
    this.route.navigate(['/job-detail'], {
      queryParams: { job: index }
    })

  }
}

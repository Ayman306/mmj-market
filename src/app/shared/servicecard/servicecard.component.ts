import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicecard',
  standalone: true,
  imports: [],
  templateUrl: './servicecard.component.html',
  styleUrl: './servicecard.component.scss'
})
export class ServicecardComponent {
@Input() item:any
constructor(private route:Router) {}
navigateTo(index:any){

    this.route.navigate(['/service'],{queryParams: { id: index }})

}
}

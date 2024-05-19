import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { WindowService } from './shared/service/window.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'mmj-market';
  constructor(private route:Router,    private windowService: WindowService
    ) {}
  ngOnInit(): void {
    this.route.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      const windowRef = this.windowService.nativeWindow;
      if (windowRef) {
        windowRef.scrollTo(0, 0);
      }
    });
}

  navigateTo(){
    this.route.navigate(['/home'])
}
}

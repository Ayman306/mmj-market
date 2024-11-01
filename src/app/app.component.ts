import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { WindowService } from './shared/service/window.service';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgToastModule, ToasterPosition } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, NgxSpinnerModule, NgClass, NgToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'mmj-market';
  ToasterPosition = ToasterPosition;
  showText: boolean = false;
  constructor(private route: Router, private windowService: WindowService) {}
  ngOnInit(): void {
    this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const windowRef = this.windowService.nativeWindow;
        if (windowRef) {
          windowRef.scrollTo(0, 0);
        }
      });
  }

  navigateTo(route: string) {
    this.route.navigate([`/${route}`]);
  }
}

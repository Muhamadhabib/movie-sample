import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'body',
  template: `<router-outlet></router-outlet>
    <ngx-loading-bar 
    [color]="'#FF0000'" 
    [includeSpinner]="false"
  >
  </ngx-loading-bar>`
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}

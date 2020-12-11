import { Directive, Injectable, NgZone, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ShellLayout implements OnInit {
  isLogin :boolean;
  constructor (private zone: NgZone, private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/signin') {
          this.isLogin= true;
        } else {
          this.isLogin= false;
        }
      }
    });
  }

  ngOnInit(): void {}
}

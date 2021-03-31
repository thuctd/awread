import { Directive, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class SharedLayout implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigateToSearch() {
    this.router.navigateByUrl('/search');
  }
}

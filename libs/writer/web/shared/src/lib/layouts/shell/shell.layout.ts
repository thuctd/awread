import { Directive, Injectable, NgZone, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ShellLayout implements OnInit {
  isLogin :boolean;
  constructor () {}

  ngOnInit(): void {}
}

import { Directive, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ShellLayout implements OnInit {
  isLogin: boolean;
  constructor() {}

  ngOnInit(): void {}
}

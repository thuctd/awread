import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginPage implements OnInit {
  constructor() {
    console.log('hello login page')
  }

  ngOnInit(): void { }

  handleClick() {
    console.log('handle click');
  }
}

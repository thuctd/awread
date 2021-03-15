import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-author',
  templateUrl: './author.layout.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorLayout implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

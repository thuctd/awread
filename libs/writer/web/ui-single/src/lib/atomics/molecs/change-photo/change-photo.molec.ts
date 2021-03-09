import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'change-photo',
  templateUrl: './change-photo.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePhotoMolec implements OnInit {
  @Input() imgSrc =
    'https://i.pinimg.com/originals/5b/57/13/5b5713348f5e82480cc4fd030a54b339.jpg';
  @Output() eventChangeImg = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
}

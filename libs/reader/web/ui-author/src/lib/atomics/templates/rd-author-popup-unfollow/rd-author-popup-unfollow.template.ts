import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-rd-author-popup-unfollow',
  templateUrl: './rd-author-popup-unfollow.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdAuthorPopupUnfollowTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-comment',
  templateUrl: './comment.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

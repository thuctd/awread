import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() books = [];
  @Output() nativeTopBook = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

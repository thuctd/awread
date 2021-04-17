import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'molec-detail-book-option-buttons',
  templateUrl: './detail-book-option-buttons.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookOptionButtonsMolec implements OnInit {
  @Output() chapterFistEvent = new EventEmitter();
  @Output() chapterLastEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

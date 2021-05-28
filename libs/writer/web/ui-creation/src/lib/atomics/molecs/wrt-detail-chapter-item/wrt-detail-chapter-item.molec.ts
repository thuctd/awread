import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-wrt-detail-chapter-item',
  templateUrl: './wrt-detail-chapter-item.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtDetailChapterItemMolec implements OnInit {
  @Input() chapterCouter = {};

  @Input() chapters = [];
  @Output() chapterActionEvent = new EventEmitter();

  faIcon = faPlus;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}

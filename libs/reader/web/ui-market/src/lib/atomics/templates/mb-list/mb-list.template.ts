import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef, OnChanges } from '@angular/core';

@Component({
  selector: 'template-mb-list',
  templateUrl: './mb-list.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MbListTemplate implements OnInit {
  @Input() titlePage;
  @Input() loading;
  @Input() books = [];
  @Input() topBooks = [];
  @Input() hasNextPage;
  @Input() items = [];
  @Output() emitMoreBooks = new EventEmitter();
  @Output() emitChangeBooks = new EventEmitter();
  @Output() nativeTopBook = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}

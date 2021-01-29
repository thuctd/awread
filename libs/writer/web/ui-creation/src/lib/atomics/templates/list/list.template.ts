import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'template-list',
  templateUrl: './list.template.html',
  styleUrls: ['./list.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTemplate implements OnInit {
  @Input() books;
  @Input() loading: boolean;
  @Output() addChapterEvent = new EventEmitter();
  @Output() removeBookEvent = new EventEmitter();
  @Output() editBookEvent = new EventEmitter();
  @Output() updateBookStatusEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void { }
}

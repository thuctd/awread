import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

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
  isMenu = true;
  @Input() titlePage;
  @Input() books = [];
  @Input() topBooks = [];
  @Input() items = [];
  @Output() emitChangeBooks = new EventEmitter();

  constructor(
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,) { }

  ngOnInit(): void {}
}

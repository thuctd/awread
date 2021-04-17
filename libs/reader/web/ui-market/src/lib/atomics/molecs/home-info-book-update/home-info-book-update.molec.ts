import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-home-info-book-update',
  templateUrl: './home-info-book-update.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeInfoBookUpdateMolec implements OnInit {
  @Input() book = {
    title: 'Cô gái chúng ta cùng theo đuổi năm nào',
    id: '1',
  };

  @Input() btns = ['Chương 1', 'Chương 2'];
  @Output() submitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }
}

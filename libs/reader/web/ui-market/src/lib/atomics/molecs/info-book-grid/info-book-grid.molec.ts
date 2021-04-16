import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'molec-info-book-grid',
  templateUrl: './info-book-grid.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoBookGridMolec implements OnInit {
  @Input() title = 'Cô gái chúng ta cùng theo đuổi!';
  @Input() countComment = '40';
  @Input() faIcon = faEye;
  @Input() bookId = '';
  @Input() btns = ['Chương 1', 'Chương 2'];
  @Output() submitEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}

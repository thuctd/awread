import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'molec-head-read-book',
  templateUrl: './head-read-book.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadReadBookMolec implements OnInit {
  @Output() btnClick = new EventEmitter();
  @Input() title = 'Ngày ấy vì ai mà đổi thay';
  constructor() {}

  ngOnInit(): void {}
}

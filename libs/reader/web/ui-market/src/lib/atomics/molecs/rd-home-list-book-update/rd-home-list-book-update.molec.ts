import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'molec-rd-home-list-book-update',
  templateUrl: './rd-home-list-book-update.molec.html',
  styles: [
    `
      :host {
        display: block;
      }

      :host .loading {
        height: calc(100vh - 20rem);
      }
      :host .no-data {
        height: calc(100vh - 20rem);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdHomeListBookUpdateMolec implements OnInit {
  // @Input() isInfoNovel: true | false = false;
  @Input() loading: false | true = true;
  @Input() isNovel = true;
  @Input() books = [];
  @Output() displayActivePage = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  trackByFn(index, item) {
    return item.key;
  }
}

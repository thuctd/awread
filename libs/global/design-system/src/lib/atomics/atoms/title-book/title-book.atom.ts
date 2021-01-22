import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';

@Component({
  selector: 'atom-title-book',
  templateUrl: './title-book.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleBookAtom implements OnInit {
  @Input() titleBook = 'Cô gái chúng ta cùng theo đuổi năm nào!'
  @Input() size: 's' | 'm' | 'l' = 's';
  @Input() linkBook = '';

  constructor() { }

  ngOnInit(): void {
  }

}

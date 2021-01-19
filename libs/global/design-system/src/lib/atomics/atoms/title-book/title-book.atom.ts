import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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
  @Input() titleBoook = 'Cô gái chúng ta cùng theo đuổi năm nào!'
  @Input() isSize = true;

  constructor() { }

  ngOnInit(): void {
  }

}

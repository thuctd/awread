import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-title-page-link',
  templateUrl: './title-page-link.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitlePageLinkAtom implements OnInit {
  @Input() title = 'Title';
  @Input() isUppercase: true | false = true;
  @Input() href = [];

  constructor() { }

  ngOnInit(): void {
  }

}

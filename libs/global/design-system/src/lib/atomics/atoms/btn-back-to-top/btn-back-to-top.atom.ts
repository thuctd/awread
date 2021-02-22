import { Component, OnInit, ChangeDetectionStrategy, Output, Input } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'atom-btn-back-to-top',
  templateUrl: './btn-back-to-top.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnBackToTopAtom implements OnInit {
  @Input() faIcon = faArrowUp;
  constructor() {}

  ngOnInit(): void {}

  @Output() backToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}

import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'rd-home-icon-rating',
  templateUrl: './rd-home-icon-rating.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .right-45 {
        right: 1.15rem;
      }

      @media only screen and (min-width: 414px) and (max-width: 768px) {
        :host .right-45 {
          right: 0.9rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdHomeIconRatingAtom implements OnInit {
  @Input() faIcon = faBookmark;
  @Input() topBook = 1;

  constructor() {}

  ngOnInit(): void {}
}

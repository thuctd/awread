import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'atom-review-input',
  templateUrl: './review-input.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewInputAtom implements OnInit {
  @Input() placeholder = 'Để lại một bình luận...';
  @Input() inputControl: FormControl = new FormControl('');
  @Input() photoUrl = 'http://mrmrs.github.io/photos/p/2.jpg';
  constructor() {}

  ngOnInit(): void {}
}

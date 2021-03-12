import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'molec-form-comment-book-read',
  templateUrl: './form-comment-book-read.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCommentBookReadMolec implements OnInit {
  @Input() inputControl: FormControl = new FormControl('');
  @Input() photoUrl = '/global-assets/images/2.webp';

  constructor() {}

  ngOnInit(): void {}
}

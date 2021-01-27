import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
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
  @Input() photoUrl = 'http://mrmrs.github.io/photos/p/2.jpg';

  constructor() {}

  ngOnInit(): void {}
}

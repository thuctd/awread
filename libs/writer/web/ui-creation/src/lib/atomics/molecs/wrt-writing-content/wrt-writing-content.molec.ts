import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'wrt-writing-content',
  templateUrl: './wrt-writing-content.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
      :host .invalid-feedback {
        color: red;
        margin-top: 0.25rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtWritingContentMolec implements OnInit {
  @Input() chapterForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  });
  @Input() submitted: boolean;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}

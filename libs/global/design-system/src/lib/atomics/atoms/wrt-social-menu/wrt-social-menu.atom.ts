import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'wrt-social-menu',
  templateUrl: './wrt-social-menu.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtSocialMenuAtom implements OnInit {
  @Input() chapterForm: FormGroup = this.fb.group({
    bookTitle: ['test', ''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}

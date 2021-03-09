import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'detail-textarea-form',
  templateUrl: './detail-textarea-form.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailTextareaFormAtom implements OnInit {
  @Input() placeholder = "Story's name";
  @Input() titleLabel = 'Awread';
  @Input() inputControl = new FormControl('');
  @Input() typeInput = 'text';

  constructor() {}

  ngOnInit(): void {}
}

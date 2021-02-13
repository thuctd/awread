import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'detail-input-form',
  templateUrl: './detail-input-form.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailInputFormAtom implements OnInit {
  @Input() placeholder = "Story's name";
  @Input() titleLabel = 'Awread';
  @Input() inputControl = new FormControl('');
  @Input() typeInput = 'text';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}

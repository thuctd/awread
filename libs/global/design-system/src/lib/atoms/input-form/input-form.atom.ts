import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'input-form',
  templateUrl: './input-form.atom.html',
  styleUrls: ['./input-form.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFormAtom implements OnInit {
  @Input() placeholder = 'Email Address';
  @Input() inputControl = new FormControl('');
  @Input() faIcon = faEnvelope;
  @Input() id = this.placeholder.replace(/\s/g, '-') + Math.random();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}

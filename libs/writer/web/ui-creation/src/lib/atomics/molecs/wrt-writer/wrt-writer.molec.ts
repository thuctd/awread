import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'wrt-writer',
  templateUrl: './wrt-writer.molec.html',
  styleUrls: ['./wrt-writer.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtWriterMolec implements OnInit {
  form: FormGroup;

  get formValue() {
    return this.form.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

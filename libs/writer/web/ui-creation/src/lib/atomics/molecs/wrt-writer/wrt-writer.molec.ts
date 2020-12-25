import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'wrt-writer',
  templateUrl: './wrt-writer.molec.html',
  styleUrls: ['./wrt-writer.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtWriterMolec implements OnInit {
  @Input() form = this.fb.group({
    title: ['', [Validators.required]],
    content: ['', Validators.required]
  })
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}

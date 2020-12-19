import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'detail-upload-form',
  templateUrl: './detail-upload-form.molec.html',
  styleUrls: ['./detail-upload-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailUploadFormMolec implements OnInit {
  @Input() form = this.fb.group({
    img: [''],
  })

  @Input() btn = {
    submitText: 'Edit your cover',
    isActive: true,
  };

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}

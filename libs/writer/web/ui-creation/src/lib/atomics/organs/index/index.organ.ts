import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'index',
  templateUrl: './index.organ.html',
  styleUrls: ['./index.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexOrgan implements OnInit {
  formImg = this.fb.group({
    srcImg: ['']
  })

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}

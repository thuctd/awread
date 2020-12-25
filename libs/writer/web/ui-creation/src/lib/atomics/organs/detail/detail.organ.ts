import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'detail',
  templateUrl: './detail.organ.html',
  styleUrls: ['./detail.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailOrgan implements OnInit {
  formBook = this.fb.group({
    title: [''],
    description: [''],
    tag: [''],
    genres: [''],
    target: [''],
    language: [''],
    completed: ['']
  })

  formImg = this.fb.group({
    srcImg: ['']
  })

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}

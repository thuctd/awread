import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'detail-book-form',
  templateUrl: './detail-book-form.molec.html',
  styleUrls: ['./detail-book-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookFormMolec implements OnInit {
  @Input() form = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    tag: [''],
    genres: [''],
    target: [''],
    language: [''],
    completed: ['']
  })

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}

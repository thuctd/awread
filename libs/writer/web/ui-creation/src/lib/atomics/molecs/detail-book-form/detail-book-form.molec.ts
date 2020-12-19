import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'detail-book-form',
  templateUrl: './detail-book-form.molec.html',
  styleUrls: ['./detail-book-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookFormMolec implements OnInit {
  @Input() formInformation = {
    title: {
      display: 'title',
      placeholder: `Story's name`
    },
    description: {
      display: 'description',
      placeholder: `Story's detail`
    },
    genres: {
      display: 'genres',
      placeholder: 'genres'
    },
    tags: {
      display: 'tags',
      placeholder: 'tags'
    },
    category: {
      display: 'category',
      placeholder: 'category'
    },
    target: {
      display: 'Target Audience'
    },
    language : {
      display: 'Language'
    },
    completed: {
      display: 'completed',
      placeholder: 'completed'
    },
    adult: {
      display: 'adult',
      placeholder: 'adult'
    },
    chapter0: {
      display: 'use prologue',
      placeholder: 'If you use have prologue chapter'
    },
  }


  @Input() form = this.fb.group({
    title: [''],
    description: [''],
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

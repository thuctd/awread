import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Category, Genre } from '@awread/writer/web/feature-auth';

@Component({
  selector: 'detail-book-form',
  templateUrl: './detail-book-form.molec.html',
  styleUrls: ['./detail-book-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailBookFormMolec implements OnInit {
  @Input() genres: Genre;
  @Input() categories: Category[];
  @Input() bookForm: FormGroup;
  @Input() formInformation = {
    title: {
      display: 'title',
      placeholder: `Story's name`,
    },
    description: {
      display: 'description',
      placeholder: `Story's detail`,
    },
    genres: {
      display: 'genres',
      placeholder: 'genres',
    },
    tags: {
      display: 'tags',
      placeholder: 'tags',
    },
    category: {
      display: 'category',
      placeholder: 'category',
    },
    target: {
      display: 'Target Audience',
    },
    language: {
      display: 'Language',
    },
    completed: {
      display: 'completed',
      placeholder: 'completed',
    },
    adult: {
      display: 'adult',
      placeholder: 'adult',
    },
    chapter0: {
      display: 'use prologue',
      placeholder: 'If you use have prologue chapter',
    },
  };

  @Output() btnSubmitEvent = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}

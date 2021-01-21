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
      display: 'Tiêu đề',
      placeholder: `Tiêu đề`,
    },
    description: {
      display: 'Mô tả',
      placeholder: `Mô tả`,
    },
    genres: {
      display: 'Thể loại',
      placeholder: 'Thể loại',
    },
    tags: {
      display: 'tags',
      placeholder: 'tags',
    },
    category: {
      display: 'Thể loại',
      placeholder: 'category',
    },
    target: {
      display: 'Đối tượng độc giả',
    },
    completed: {
      display: 'Đã hoàn thành',
      placeholder: 'Đã hoàn thành',
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
  @Input() inputControl = new FormControl();
  @Input() items = [
    {id: 1, name: 'Tình yêu'},
    {id: 2, name: 'Tiểu thuyết'},
    {id: 3, name: 'Kinh dị'},
    {id: 4, name: 'Kiếm hiệp'},
    {id: 5, name: 'Viễn Tưởng'}
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}

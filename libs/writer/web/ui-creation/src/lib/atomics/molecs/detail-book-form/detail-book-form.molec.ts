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
      display: 'Danh mục',
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
  @Output() genresEvent = new EventEmitter();
  @Input() inputControl = new FormControl();
  listGenres = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  addItem(e) {
    // console.log('add: ', e);
    // this.listGenres.push(e.genreid);
    // this.genresEvent.emit(this.listGenres);
  }

  removeItem(e) {
    // console.log('remove: ', e);
    // const index = this.listGenres.indexOf(e.value.genreid);
    // if (index > 0) {
    //   this.listGenres.splice(index, 1);
    //   this.genresEvent.emit(this.listGenres);
    // }
  }
}

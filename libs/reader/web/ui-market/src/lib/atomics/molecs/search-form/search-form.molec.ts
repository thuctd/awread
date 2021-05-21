import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-search-form',
  templateUrl: './search-form.molec.html',
  styleUrls: ['./search-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormMolec implements OnInit {
  @Input() faIcon = faChevronDown;
  @Input() filters: FormGroup = this.fb.group({
      typeBook: [''],
      genres: [''],
      criteria: [''],
      status: [''],
      postingDate: [''],
    });;

  @Input() genres = [];
  @Input() selectCriteria = {
    title: 'Tiêu chí',
    widthClass: 'xl:w-60 md:w-48',
    options: [
      { id: '1', name: 'Truyện mới nhất' },
      { id: '2', name: 'Truyện đọc nhiều nhất' },
      { id: '3', name: 'Truyện được đánh giá tốt nhất' },
      { id: '4', name: 'Truyện bất kì' },
    ],
  };

  @Input() selectStatus = {
    title: 'Tình Trạng',
    widthClass: 'xl:w-60 md:w-48',
    options: [
      { id: '1', name: 'Đã hoàn thành' },
      { id: '2', name: 'Chưa hoàn thành' },
    ],
  };
  @Input() postingDate = {
    title: 'Thời gian',
    widthClass: 'xl:w-44 md:w-36',
    options: [
      { id: '1', name: '7 ngày' },
      { id: '2', name: '30 ngày' },
      { id: '3', name: '90 ngày' },
    ],
  };
  @Output() filterBooksEvent = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}

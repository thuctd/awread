import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Category, Genre } from '@awread/writer/web/feature-auth';

@Component({
  selector: 'detail',
  templateUrl: './detail.organ.html',
  styleUrls: ['./detail.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailOrgan implements OnInit {
  @Input() bookForm: FormGroup;
  @Input() categories: Category[];
  @Input() genres: Genre[];
  @Output() bookSubmitEvent = new EventEmitter();
  @Output() genresEvent = new EventEmitter();
  @Input() submitted: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}

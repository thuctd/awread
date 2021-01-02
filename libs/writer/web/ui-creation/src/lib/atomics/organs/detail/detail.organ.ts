import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'detail',
  templateUrl: './detail.organ.html',
  styleUrls: ['./detail.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailOrgan implements OnInit {
  @Input() bookForm: FormGroup;
  @Output() bookSubmitEvent = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}

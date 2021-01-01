import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'form-profie',
  templateUrl: './form-profie.organ.html',
  styleUrls: ['./form-profie.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormProfieOrgan implements OnInit {
  @Input() link = '/forgot';
  @Input() submitText = 'Lưu';
  @Input() profileForm: FormGroup;
  @Output() updateProfileEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

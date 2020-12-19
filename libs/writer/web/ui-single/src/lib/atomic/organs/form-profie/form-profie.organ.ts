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
  @Input() submitText = 'Lưu';

  constructor() {}

  ngOnInit(): void {}
}

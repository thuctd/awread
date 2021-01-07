import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'submit-btn',
  templateUrl: './submit-btn.atom.html',
  styleUrls: ['./submit-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubmitBtnAtom implements OnInit {
  @Output() btnClicked = new EventEmitter();
  @Input() name = 'Đăng nhập';
  @Input() active = false;
  constructor() {}

  ngOnInit(): void {}
}

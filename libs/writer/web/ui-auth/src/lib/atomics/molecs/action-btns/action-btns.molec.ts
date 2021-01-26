import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'action-btns',
  templateUrl: './action-btns.molec.html',
  styleUrls: ['./action-btns.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionBtnsMolec implements OnInit {
  @Input() formActiveStatus = false;
  @Input() title = 'Đăng nhập với';
  @Output() auth = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

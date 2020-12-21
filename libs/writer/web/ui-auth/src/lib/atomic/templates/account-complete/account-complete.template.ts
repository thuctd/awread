import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'account-completee',
  templateUrl: './account-complete.template.html',
  styleUrls: ['./account-complete.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCompleteTemplate implements OnInit {
  @Output() submitEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

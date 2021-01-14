import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-check-mail',
  templateUrl: './check-mail.molec.html',
  styleUrls: ['./check-mail.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckMailMolec implements OnInit {
  @Output() BtnClicked = new EventEmitter();
  @Input() link = '/global-assets/images/mailbox.png';
  @Input() faIcon = faArrowLeft;
  @Input() backhome = '/home';
  @Input() textLink = {
    text: 'Quay trở về Awread',
    class: 'text-green-500',
  };

  constructor() {}

  ngOnInit(): void {}
}

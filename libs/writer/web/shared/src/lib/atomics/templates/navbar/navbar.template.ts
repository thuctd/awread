import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { User } from '@awread/writer/web/feature-auth';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.template.html',
  styleUrls: ['./navbar.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarTemplate implements OnInit {
  @Input() user: User;
  @Output() searchEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.template.html',
  styleUrls: ['./profile.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileTemplate implements OnInit {
  @Input() profileForm: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}

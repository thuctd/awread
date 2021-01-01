import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.template.html',
  styleUrls: ['./profile.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileTemplate implements OnInit {
  @Input() profileForm: FormGroup;
  @Output() updateProfileEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => this.profileForm.patchValue({ username: 'ahihi' }), 5000);
  }
}

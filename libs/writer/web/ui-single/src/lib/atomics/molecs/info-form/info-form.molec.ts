import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'info-form',
  templateUrl: './info-form.molec.html',
  styleUrls: ['./info-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoFormMolec implements OnInit {
  @Input() profileForm: FormGroup;
  @Input() submitted: boolean;
  items = [
    {
      key: 'Email',
    },
    {
      key: 'Số điện thoại',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

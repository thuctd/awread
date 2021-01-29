import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'input-form-profile',
  templateUrl: './input-form-profile.atom.html',
  styleUrls: ['./input-form-profile.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFormProfileAtom implements OnInit {
  @Input() key = 'Name';
  @Input() control = new FormControl();

  constructor() { }

  ngOnInit(): void { }
}

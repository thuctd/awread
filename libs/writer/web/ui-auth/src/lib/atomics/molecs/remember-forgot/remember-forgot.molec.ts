import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'remember-forgot',
  templateUrl: './remember-forgot.molec.html',
  styleUrls: ['./remember-forgot.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RememberForgotMolec implements OnInit {
  @Input() link = '/forgot';
  constructor() {}

  ngOnInit(): void {}
}

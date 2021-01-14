import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-check-mail-web',
  templateUrl: './check-mail-web.template.html',
  styleUrls: ['./check-mail-web.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckMailWebTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

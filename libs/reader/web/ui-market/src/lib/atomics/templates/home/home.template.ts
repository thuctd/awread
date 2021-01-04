import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-home',
  templateUrl: './home.template.html',
  styleUrls: ['./home.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

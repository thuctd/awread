import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-header',
  templateUrl: './header.part.html',
  styleUrls: ['./header.part.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPart implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

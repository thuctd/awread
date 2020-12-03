import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-creations',
  templateUrl: './creations.layout.html',
  styleUrls: ['./creations.layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreationsLayout implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

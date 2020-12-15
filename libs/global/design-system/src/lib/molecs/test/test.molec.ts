import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.molec.html',
  styleUrls: ['./test.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestMolec implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

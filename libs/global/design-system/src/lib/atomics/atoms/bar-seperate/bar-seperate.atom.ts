import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atom-bar-seperate',
  templateUrl: './bar-seperate.atom.html',
  styleUrls: ['./bar-seperate.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarSeperateAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

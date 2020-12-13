import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'input',
  templateUrl: './input.atom.html',
  styleUrls: ['./input.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

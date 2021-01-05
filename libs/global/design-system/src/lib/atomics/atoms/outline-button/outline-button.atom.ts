import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atom-outline-button',
  templateUrl: './outline-button.atom.html',
  styleUrls: ['./outline-button.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutlineButtonAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

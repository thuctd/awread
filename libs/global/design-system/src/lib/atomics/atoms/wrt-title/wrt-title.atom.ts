import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'wrt-title',
  templateUrl: './wrt-title.atom.html',
  styleUrls: ['./wrt-title.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtTitleAtom implements OnInit {
  @Input() inputControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

}

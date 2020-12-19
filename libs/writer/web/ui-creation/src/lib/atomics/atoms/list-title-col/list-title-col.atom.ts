import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'list-title-col',
  templateUrl: './list-title-col.atom.html',
  styleUrls: ['./list-title-col.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTitleColAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

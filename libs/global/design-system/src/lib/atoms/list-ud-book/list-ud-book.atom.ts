import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'list-ud-book',
  templateUrl: './list-ud-book.atom.html',
  styleUrls: ['./list-ud-book.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListUdBookAtom implements OnInit {
  @Input() updatedAt = '2020-12-19';

  constructor() { }

  ngOnInit(): void {
  }

}

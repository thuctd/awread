import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'list-type-book',
  templateUrl: './list-type-book.atom.html',
  styleUrls: ['./list-type-book.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTypeBookAtom implements OnInit {
  @Input() type = 'Tình yêu';

  constructor() { }

  ngOnInit(): void {
  }

}

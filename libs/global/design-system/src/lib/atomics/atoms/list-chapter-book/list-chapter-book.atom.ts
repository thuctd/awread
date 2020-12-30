import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'list-chapter-book',
  templateUrl: './list-chapter-book.atom.html',
  styleUrls: ['./list-chapter-book.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListChapterBookAtom implements OnInit {
  @Input() countTotal = 1000;
  @Input() countPublished = 50;

  constructor() { }

  ngOnInit(): void {
  }

}

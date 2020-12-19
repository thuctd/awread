import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

export type BookStatus = 'draft' | 'pending' | 'published';

export interface TocChapter {
  content: string;
  no: number;
  title: string;
  status: boolean;
  publishedAt: BookStatus;
  count: number;
}

@Component({
  selector: 'detail-info-book',
  templateUrl: './detail-info-book.atom.html',
  styleUrls: ['./detail-info-book.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailInfoBookAtom implements OnInit {
  @Input() chapterTitle = 'Cô gái tôi theo đuổi năm nào';
  @Input() chapterStatus = 'draft';
  @Input() chapterPublishedAt = '2020-12-16';

  constructor() { }

  ngOnInit(): void {
  }

}

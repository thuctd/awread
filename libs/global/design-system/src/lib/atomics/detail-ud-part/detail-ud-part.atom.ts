import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'detail-ud-part',
  templateUrl: './detail-ud-part.atom.html',
  styleUrls: ['./detail-ud-part.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailUdPartAtom implements OnInit {
  @Input() chapterStatus = 'draft';
  @Input() chapterPublishedAt = '2020-12-16';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'detail-title-part',
  templateUrl: './detail-title-part.atom.html',
  styleUrls: ['./detail-title-part.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailTitlePartAtom implements OnInit {
  @Input() chapterTitle = 'Cô gái tôi theo đuổi năm nào';

  constructor() { }

  ngOnInit(): void {
  }

}

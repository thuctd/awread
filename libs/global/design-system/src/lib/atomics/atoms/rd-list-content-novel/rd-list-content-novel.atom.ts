import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'rd-list-content-novel',
  templateUrl: './rd-list-content-novel.atom.html',
  styleUrls: ['./rd-list-content-novel.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdListContentNovelAtom implements OnInit {
  // eslint-disable-next-line max-len
  @Input() contentNovel = `“Tuổi thanh xuân giống như một cơn mưa rào. Dù cho bạn từng bị cảm lạnh vì tắm mưa, bạn vẫn muốn được đắm mình trong cơn mưa ấy lần nữa. Mỗi người đều từng có khoảng thời gian bồng bột ấy…”.`;

  @Input() size: 's' | 'm' = 's'

  constructor() { }

  ngOnInit(): void {
  }

}

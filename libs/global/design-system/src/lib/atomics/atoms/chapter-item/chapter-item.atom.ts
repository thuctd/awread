import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-chapter-item',
  templateUrl: './chapter-item.atom.html',
  styleUrls: ['./chapter-item.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChapterItemAtom implements OnInit {
  @Input() title = 'Chương 1';
  @Input() value = 'Ngày ấy vì ai mà đổi thay';
  @Input() price = 'Miễn phí';

  constructor() { }

  ngOnInit(): void {
  }

}

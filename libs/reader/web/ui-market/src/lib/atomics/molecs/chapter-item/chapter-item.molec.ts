import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'molec-chapter-item',
  templateUrl: './chapter-item.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterItemMolec implements OnInit {
  @Input() isLastItem = false;
  @Input() chapterId = '123453_Assxzxc';
  @Input() bookId = '123453_Assxzxc';
  @Input() chapter = {
    title: 'Chương 1',
    value: 'Ngày ấy vì ai mà đổi thay',
    price: 'Miễn phí',
    createAt: '09-09-2020',
  };
  constructor() { }

  ngOnInit(): void { }
}

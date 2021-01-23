import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-detail-book-introduce',
  templateUrl: './detail-book-introduce.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookIntroduceMolec implements OnInit {
  @Input() description = `Đừng hỏi em có nhớ anh không. </br>
  Em không nhớ, em đã từng quên đâu mà cần phải nhớ?</br>
  Cũng đừng hỏi em  có thể yêu lần nữa không.</br>
  Em không thể. Vì ngay từ lần đầu tiên yêu anh, trái tim em đã yêu anh quá nhiều. </br>
  `;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-rd-news-detail',
  templateUrl: './rd-news-detail.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsDetailTemplate implements OnInit {
  @Input()
  excerpt = `Ánh nắng ban mai vào căn phòng, Hương nhăn nhó vì chói mắt, toàn thân ê ẩm sau một đêm xoã tới bến. Mãi Hương mới bò dậy được, tóc tai rối bù, trên người chỉ mặc đồ nhỏ. Lúc định hình lại được, cô mới nhận ra mình đang ở trên một chiếc giường lạ hoắc, trong một căn phòng cũng lạ hoắc. Bên cạnh Hương là một tên con trai mặt búng ra sữa và đương nhiên cũng lạ như cái chốn này`;

  @Output() ShareClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}

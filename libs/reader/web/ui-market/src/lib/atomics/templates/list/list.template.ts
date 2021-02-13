import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-list',
  templateUrl: './list.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTemplate implements OnInit {
  tabs = [{ name: 'Truyện dài', isActive: true }, { name: 'Truyện ngắn' }, { name: 'Tiểu thuyết' }];

  constructor() {}

  ngOnInit(): void {}
}

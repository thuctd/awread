import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() titleTemplate: 'Truyện tự sáng tác' | 'Truyện sưu tập' = 'Truyện sưu tập';
  namePage: String;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.namePage = this.router.url;
  }

}

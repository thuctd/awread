import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-detail-book-sidebar',
  templateUrl: './detail-book-sidebar.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookSidebarOrgan implements OnInit {
  @Input() topBooks = [];
  @Input() authorBooks = [];

  constructor() { }

  ngOnInit(): void {
  }

}

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
  @Input() sidebars = [
    {
      submitText: 'Cùng tác giả',
      isActive: true,
    },
    {
      submitText: 'Top phổ biến ',
      isActive: true,
    },
    
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

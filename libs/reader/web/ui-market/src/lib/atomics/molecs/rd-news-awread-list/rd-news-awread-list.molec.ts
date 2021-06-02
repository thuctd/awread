import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-news-awread-list',
  templateUrl: './rd-news-awread-list.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdNewsAwreadListMolec implements OnInit {
  @Input() newsMiddle = [
    {
      blogId: '',
      title: '',
      updatedAt: '',
      description: '',
      image: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

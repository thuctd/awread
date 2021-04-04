import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-download-app',
  templateUrl: './download-app.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadAppMolec implements OnInit {
  @Input() image = [
    {
      src: '/global-assets/images/Group-62.webp',
      alt: 'appStore',
    },
    {
      src: '/global-assets/images/Group-63.webp',
      alt: 'googlePlay',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

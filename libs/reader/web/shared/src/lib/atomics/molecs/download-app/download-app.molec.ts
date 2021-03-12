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
      src: '/global-assets/images/appStore.webp',
      alt: 'appStore',
    },
    {
      src: '/global-assets/images/googlePlay.webp',
      alt: 'googlePlay',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

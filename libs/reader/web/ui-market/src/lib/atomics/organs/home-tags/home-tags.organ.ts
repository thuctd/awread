import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'home-tags',
  templateUrl: './home-tags.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTagsOrgan implements OnInit {
  @Input() titlePage = 'Tags';
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-footer',
  templateUrl: './footer.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterTemplate implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

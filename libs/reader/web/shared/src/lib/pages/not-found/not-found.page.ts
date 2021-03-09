import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-not-found',
  templateUrl: './not-found.page.html',
  styles: [
    `
      :host {
        display: block;
      }

      .img__notfound {
          width: 686px;
          height: 319px;
      }

      @media only screen and (max-width: 460px){
        .img__notfound {
          width: 343px;
          height: 160px;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

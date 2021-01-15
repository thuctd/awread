import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'template-check-mail-web',
  templateUrl: './check-mail-web.template.html',
  styleUrls: ['./check-mail-web.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigimgProfileAtom implements OnInit {
  @Input() srcImg = 'https://hochu.ua/images/05600a6dc19a37ef746fb267902398bf.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}

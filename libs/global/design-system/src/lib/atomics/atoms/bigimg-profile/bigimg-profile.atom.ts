import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'bigimg-profile',
  templateUrl: './bigimg-profile.atom.html',
  styleUrls: ['./bigimg-profile.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BigimgProfileAtom implements OnInit {
  @Input() srcImg = 'https://hochu.ua/images/05600a6dc19a37ef746fb267902398bf.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}

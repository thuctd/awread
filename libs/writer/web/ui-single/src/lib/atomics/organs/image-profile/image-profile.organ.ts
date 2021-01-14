import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'image-profile',
  templateUrl: './image-profile.organ.html',
  styleUrls: ['./image-profile.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageProfileOrgan implements OnInit {
  @Input() imgSrc = 'https://hochu.ua/images/05600a6dc19a37ef746fb267902398bf.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}

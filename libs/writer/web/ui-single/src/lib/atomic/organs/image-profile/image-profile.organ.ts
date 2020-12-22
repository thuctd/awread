import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'image-profile',
  templateUrl: './image-profile.organ.html',
  styleUrls: ['./image-profile.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageProfileOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

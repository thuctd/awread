import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-image-profile',
  templateUrl: './image-profile.section.html',
  styleUrls: ['./image-profile.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageProfileSection implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

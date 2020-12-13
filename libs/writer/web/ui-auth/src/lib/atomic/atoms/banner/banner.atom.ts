import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.atom.html',
  styleUrls: ['./banner.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

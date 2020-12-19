import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'detail-upload-img',
  templateUrl: './detail-upload-img.atom.html',
  styleUrls: ['./detail-upload-img.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailUploadImgAtom implements OnInit {
  @Input() srcImg = 'https://via.placeholder.com/520x740.png';

  constructor() { }

  ngOnInit(): void {
  }

}

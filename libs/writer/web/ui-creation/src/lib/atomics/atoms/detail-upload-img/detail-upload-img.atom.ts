import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'detail-upload-img',
  templateUrl: './detail-upload-img.atom.html',
  styleUrls: ['./detail-upload-img.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailUploadImgAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

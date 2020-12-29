import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'change-photo',
  templateUrl: './change-photo.molec.html',
  styleUrls: ['./change-photo.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePhotoMolec implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

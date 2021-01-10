import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-detail-image',
  templateUrl: './detail-image.atom.html',
  styleUrls: ['./detail-image.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailImageAtom implements OnInit {
  @Input() src = '/global-assets/images/0004.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}

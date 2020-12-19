import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'list-img-book',
  templateUrl: './list-img-book.atom.html',
  styleUrls: ['./list-img-book.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListImgBookAtom implements OnInit {
  @Input() srcImg = 'https://via.placeholder.com/520x740.png';

  constructor() { }

  ngOnInit(): void {
  }

}

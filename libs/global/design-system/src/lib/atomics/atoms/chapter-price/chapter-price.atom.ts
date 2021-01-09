import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-chapter-price',
  templateUrl: './chapter-price.atom.html',
  styleUrls: ['./chapter-price.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChapterPriceAtom implements OnInit {
  @Input() value = 'Miễn phí';
  constructor() { }

  ngOnInit(): void {
  }

}

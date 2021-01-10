import { Component, OnInit, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'rd-home-tab-book',
  templateUrl: './rd-home-tab-book.atom.html',
  styleUrls: ['./rd-home-tab-book.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdHomeTabBookAtom implements OnInit {
  @Output() tabClicked = new EventEmitter();
  @Output() onBtnClicked = new EventEmitter();
  @Input() titleBook = 'Cô gái chúng ta cùng theo đuổi'
  @Input() srcImg = 'https://via.placeholder.com/260x370.png';
  @Input() active = false;

  constructor() { }

  ngOnInit(): void {
  }

}

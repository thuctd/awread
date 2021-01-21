import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'wrt-info-book',
  templateUrl: './wrt-info-book.atom.html',
  styleUrls: ['./wrt-info-book.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtInfoBookAtom implements OnInit {
  @Output() submitEvent = new EventEmitter();
  @Input() titleChapter = 'Ngày em hạnh phúc!';

  constructor() { }

  ngOnInit(): void {
  }

}

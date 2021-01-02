import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-title-item',
  templateUrl: './title-item.atom.html',
  styleUrls: ['./title-item.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleItemAtom implements OnInit {
  @Input() title = "Truyện nổi bật";

  constructor() { }

  ngOnInit(): void {
  }

}

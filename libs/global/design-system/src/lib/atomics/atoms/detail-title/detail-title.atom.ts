import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-detail-title',
  templateUrl: './detail-title.atom.html',
  styleUrls: ['./detail-title.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailTitleAtom implements OnInit {
  @Input() title = 'Ngày ấy vì ai mà đổi thay';
  constructor() { }

  ngOnInit(): void {
  }

}

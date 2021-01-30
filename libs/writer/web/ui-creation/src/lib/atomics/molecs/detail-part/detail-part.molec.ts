import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'detail-part',
  templateUrl: './detail-part.molec.html',
  styleUrls: ['./detail-part.molec.scss'],
})
export class DetailPartMolec implements OnInit {
  @Input() chapter = {
    chapterNumber: '',
    title: '',
    status: '',
    updatedat: '',
  };
  constructor() {}

  ngOnInit(): void {}
}

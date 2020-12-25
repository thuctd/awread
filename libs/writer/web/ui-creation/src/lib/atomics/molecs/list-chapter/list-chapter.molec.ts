import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'list-chapter',
  templateUrl: './list-chapter.molec.html',
  styleUrls: ['./list-chapter.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListChapterMolec implements OnInit {
  @Input() countTotal = 1000;
  @Input() countPublished = 50;

  constructor() { }

  ngOnInit(): void {
  }

}

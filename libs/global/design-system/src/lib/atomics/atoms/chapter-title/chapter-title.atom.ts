import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-chapter-title',
  templateUrl: './chapter-title.atom.html',
  styleUrls: ['./chapter-title.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChapterTitleAtom implements OnInit {
  @Input() title = 'Chương 1';
  constructor() { }

  ngOnInit(): void {
  }

}

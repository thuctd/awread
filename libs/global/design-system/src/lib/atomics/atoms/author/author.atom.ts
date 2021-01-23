import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'atom-author',
  templateUrl: './author.atom.html',
  styleUrls: ['./author.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorAtom implements OnInit {
  @Output() submitEvent = new EventEmitter();
  @Input() authorName = 'Cẩm Thương';
  @Input() title = 'Tác giả:';
  @Input() color = 'text-green-400';

  constructor() { }

  ngOnInit(): void {
  }

}

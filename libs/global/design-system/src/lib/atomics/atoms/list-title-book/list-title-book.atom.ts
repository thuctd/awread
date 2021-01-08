import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'list-title-book',
  templateUrl: './list-title-book.atom.html',
  styleUrls: ['./list-title-book.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTitleBookAtom implements OnInit {
  @Input() titleBoook = 'Cô gái chúng ta cùng theo đuổi năm nào!'
  @Input() isSize = true;

  constructor() { }

  ngOnInit(): void {
  }

}

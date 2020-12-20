import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'list-title-col',
  templateUrl: './list-title-col.atom.html',
  styleUrls: ['./list-title-col.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTitleColAtom implements OnInit {
  @Input() titleBoook = 'Cô gái chúng ta cùng theo đuổi năm nào!'

  constructor() { }

  ngOnInit(): void {
  }

}

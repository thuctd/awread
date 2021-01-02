import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atom-pagination',
  templateUrl: './pagination.atom.html',
  styleUrls: ['./pagination.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

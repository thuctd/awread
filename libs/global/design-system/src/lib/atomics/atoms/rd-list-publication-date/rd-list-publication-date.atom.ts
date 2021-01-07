import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'rd-list-publication-date',
  templateUrl: './rd-list-publication-date.atom.html',
  styleUrls: ['./rd-list-publication-date.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdListPublicationDateAtom implements OnInit {
  @Input() publicationDate = '09/04/2020';

  constructor() { }

  ngOnInit(): void {
  }

}

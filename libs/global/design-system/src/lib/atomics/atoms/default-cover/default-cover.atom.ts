import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atom-default-cover',
  templateUrl: './default-cover.atom.html',
  styleUrls: ['./default-cover.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultCoverAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

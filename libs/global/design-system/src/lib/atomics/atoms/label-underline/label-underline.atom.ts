import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-label-underline',
  templateUrl: './label-underline.atom.html',
  styleUrls: ['./label-underline.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelUnderlineAtom implements OnInit {
  @Input() title = 'Giới thiệu';
  constructor() { }

  ngOnInit(): void {
  }

}

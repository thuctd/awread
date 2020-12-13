import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'check-btn',
  templateUrl: './check-btn.atom.html',
  styleUrls: ['./check-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckBtnAtom implements OnInit {
  @Input() text = 'Are you sure?';
  constructor() { }

  ngOnInit(): void {
  }

}

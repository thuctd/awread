import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'link-btn',
  templateUrl: './link-btn.atom.html',
  styleUrls: ['./link-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkBtnAtom implements OnInit {
  @Input() formControl = new FormControl('');
  @Input() text = 'go somewhere?';
  constructor() { }

  ngOnInit(): void {
  }

}

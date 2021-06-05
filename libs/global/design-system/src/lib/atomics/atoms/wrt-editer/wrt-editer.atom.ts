import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'wrt-editer',
  templateUrl: './wrt-editer.atom.html',
  styleUrls: ['./wrt-editer.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrtEditerAtom implements OnInit {
  @Input() inputControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  formatOnCreate(editor) {
    editor.format('align', 'justify')
  }

}

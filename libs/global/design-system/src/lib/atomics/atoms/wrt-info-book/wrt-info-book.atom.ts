import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'wrt-info-book',
  templateUrl: './wrt-info-book.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtInfoBookAtom implements OnInit {
  @Input() chapter = {
    title: '',
    content: '',
    position: '0',
    published: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}

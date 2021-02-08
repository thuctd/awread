import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-btn-switch-chapter',
  templateUrl: './btn-switch-chapter.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnSwitchChapterAtom implements OnInit {
  @Input() case = true;
  @Output() btnClick = new EventEmitter();
  @Input() title = 'Tiếp';
  @Input() faIcon = faChevronRight;
  @Input() class = 'w-24';

  constructor() {}

  ngOnInit(): void {}
}

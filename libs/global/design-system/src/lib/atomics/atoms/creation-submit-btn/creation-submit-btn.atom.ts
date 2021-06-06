import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cr-submit-btn',
  templateUrl: './creation-submit-btn.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreationSubmitBtnAtom implements OnInit {
  @Output() btnClicked = new EventEmitter();
  @Input() submitText = 'Publish';
  @Input() active = true;
  @Input() faIcon;
  @Input() isHidden = false;
  @Input() disabled = false;
  constructor() { }

  ngOnInit(): void { }

  wtf(event) {
    this.btnClicked.emit('fuck');
  }
}

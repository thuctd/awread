import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';

@Component({
  selector: 'cr-submit-btn',
  templateUrl: './creation-submit-btn.atom.html',
  styleUrls: ['./creation-submit-btn.atom.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreationSubmitBtnAtom implements OnInit {
  @Output() btnClicked = new EventEmitter();
  @Input() submitText = 'Publish';
  @Input() active = true;

  constructor() {}

  ngOnInit(): void {}
}

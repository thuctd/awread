import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'detail-act',
  templateUrl: './detail-act.molec.html',
  styleUrls: ['./detail-act.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailActMolec implements OnInit {
  @Output() chapterActionEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

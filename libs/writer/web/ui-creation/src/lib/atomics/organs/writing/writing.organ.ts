import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'writing',
  templateUrl: './writing.organ.html',
  styleUrls: ['./writing.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingOrgan implements OnInit {
  @Input() chapterForm: FormGroup;
  @Input() chapterStatus: string;
  @Output() chapterStatusEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

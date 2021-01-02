import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'writing',
  templateUrl: './writing.organ.html',
  styleUrls: ['./writing.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingOrgan implements OnInit {
  @Input() chapterForm: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}

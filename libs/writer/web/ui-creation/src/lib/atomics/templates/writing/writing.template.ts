import { FormGroup } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'template-writing',
  templateUrl: './writing.template.html',
  styleUrls: ['./writing.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritingTemplate implements OnInit {
  @Input() chapterForm: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}

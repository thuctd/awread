import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'template-writing',
  templateUrl: './writing.template.html',
  styleUrls: ['./writing.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WritingTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'organ-step-optional',
  templateUrl: './step-optional.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepOptionalOrgan implements OnInit {
  @Input() optionalForm;
  @Output() linkSocialEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

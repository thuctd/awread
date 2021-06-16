import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'organ-step-complete',
  templateUrl: './step-complete.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepCompleteOrgan implements OnInit {
  @Input() requireForm;
  @Input() optionalForm;
  @Input() experienceForm;
  @Input() stepper;
  @Output() completeEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

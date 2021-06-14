import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}

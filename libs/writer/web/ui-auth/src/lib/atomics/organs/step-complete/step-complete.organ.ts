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
  @Input() formValid;
  @Input() requireFormData;
  @Input() optionalFormData;
  @Input() experienceFormData;
  @Input() stepper;
  @Output() completeEvent = new EventEmitter();
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cd.detectChanges();
  }

}

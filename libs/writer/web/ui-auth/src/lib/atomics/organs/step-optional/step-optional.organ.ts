import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}

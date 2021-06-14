import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-step-require',
  templateUrl: './step-require.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepRequireOrgan implements OnInit {
  @Input() requireForm;
  constructor() { }

  ngOnInit(): void {
  }

}

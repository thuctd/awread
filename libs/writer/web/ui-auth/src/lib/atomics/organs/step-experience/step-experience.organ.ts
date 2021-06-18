import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-step-experience',
  templateUrl: './step-experience.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepExperienceOrgan implements OnInit {
  @Input() experienceForm;
  @Input() genres;
  @Input() isMobile = false;
  constructor() { }

  ngOnInit(): void {
  }

}

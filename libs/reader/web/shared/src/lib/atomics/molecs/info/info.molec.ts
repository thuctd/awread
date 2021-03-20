import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-info',
  templateUrl: './info.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoMolec implements OnInit {
  @Input() text = 'text-gray-500';
  @Input() title = 'Email';
  @Input() line1 = 'Awread Book';
  @Input() line2 = 'awreadbook@gmail.com';
  @Input() link1 = '';
  @Input() link2 = '';

  constructor() { }

  ngOnInit(): void { }
}

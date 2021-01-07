import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atom-slider',
  templateUrl: './slider.atom.html',
  styleUrls: ['./slider.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

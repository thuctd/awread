import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.atom.html',
  styleUrls: ['./logo.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

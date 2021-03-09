import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.atom.html',
  styles: [`
    :host {
        display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoAtom implements OnInit {
  @Input() logoWhite = false;
  @Input() isLogged = false;
  constructor() { }

  ngOnInit(): void { }
}

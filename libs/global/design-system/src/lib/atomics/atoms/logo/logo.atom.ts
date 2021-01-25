import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'logo',
  templateUrl: './logo.atom.html',
  styleUrls: ['./logo.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoAtom implements OnInit {
  @Input() logoWhite = false;
  @Input() isLogged = false;
  constructor() {}

  ngOnInit(): void {}
}

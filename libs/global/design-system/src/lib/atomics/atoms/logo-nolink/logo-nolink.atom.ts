import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'atom-logo-nolink',
  templateUrl: './logo-nolink.atom.html',
  styleUrls: ['./logo-nolink.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoNolinkAtom implements OnInit {
  @Input() link = '/global-assets/images/logo-white.png';

  constructor() {}

  ngOnInit(): void {}
}

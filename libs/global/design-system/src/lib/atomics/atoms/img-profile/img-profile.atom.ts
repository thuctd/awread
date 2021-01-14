import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'img-profile',
  templateUrl: './img-profile.atom.html',
  styleUrls: ['./img-profile.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class imgProfileAtom implements OnInit {
  @Input() imgSrc =
    'https://hochu.ua/images/05600a6dc19a37ef746fb267902398bf.jpg';

  @Input() isSize = 'big';

  constructor() {}

  ngOnInit(): void {}
}

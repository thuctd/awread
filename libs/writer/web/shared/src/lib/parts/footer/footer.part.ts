import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-footer',
  templateUrl: './footer.part.html',
  styleUrls: ['./footer.part.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterPart implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

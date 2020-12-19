import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'forgot-header',
  templateUrl: './forgot-header.molec.html',
  styleUrls: ['./forgot-header.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotHeaderMolec implements OnInit {
  @Input() title;
  @Input() description;
  constructor() { }

  ngOnInit(): void {
  }

}

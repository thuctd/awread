import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'detail-form',
  templateUrl: './detail-form.molec.html',
  styleUrls: ['./detail-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailFormMolec implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

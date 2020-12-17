import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'detail-toogle-form',
  templateUrl: './detail-toogle-form.atom.html',
  styleUrls: ['./detail-toogle-form.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailToogleFormAtom implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

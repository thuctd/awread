import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'detail-link-btns',
  templateUrl: './detail-link-btns.molec.html',
  styleUrls: ['./detail-link-btns.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailLinkBtnsMolec implements OnInit {
  @Input() formActiveStatus = false;
  constructor() { }

  ngOnInit(): void {
  }

}

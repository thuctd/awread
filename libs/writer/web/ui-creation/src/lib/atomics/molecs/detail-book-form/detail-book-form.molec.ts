import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'detail-book-form',
  templateUrl: './detail-book-form.molec.html',
  styleUrls: ['./detail-book-form.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookFormMolec implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

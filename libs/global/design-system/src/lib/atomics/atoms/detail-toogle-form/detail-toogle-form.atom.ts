import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'detail-toogle-form',
  templateUrl: './detail-toogle-form.atom.html',
  styleUrls: ['./detail-toogle-form.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailToogleFormAtom implements OnInit {
  @Input() inputControl = new FormControl('');
  @Input() titleLabel = 'Awread';
  @Input() detailToogle = 'Hoàn thành?';

  constructor() { }

  ngOnInit(): void {
  }

}

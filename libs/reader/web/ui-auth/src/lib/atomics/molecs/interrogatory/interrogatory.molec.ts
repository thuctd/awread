import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-interrogatory',
  templateUrl: './interrogatory.molec.html',
  styleUrls: ['./interrogatory.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterrogatoryMolec implements OnInit {
  @Input() text = 'Tài khoản mới?';

  @Input() textLink = 'Tạo một tài khoản mới';
  @Input() link = '';

  constructor() { }

  ngOnInit(): void { }
}

import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'atom-outline-button',
  templateUrl: './outline-button.atom.html',
  styleUrls: ['./outline-button.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutlineButtonAtom implements OnInit {
  @Input() title = 'Đăng nhập';
  constructor() { }

  ngOnInit(): void {
  }

}

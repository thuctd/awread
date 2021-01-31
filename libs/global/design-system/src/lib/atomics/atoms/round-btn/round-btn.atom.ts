import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'atom-round-btn',
  templateUrl: './round-btn.atom.html',
  styleUrls: ['./round-btn.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoundBtnAtom implements OnInit {
  @Input() title = 'Đọc chương đầu';
  @Input() color = 'bg-green-400 text-white';
  @Input() href = '/';
  @Output() submitEvent = new EventEmitter();
   
  constructor() { }

  ngOnInit(): void {
  }

}

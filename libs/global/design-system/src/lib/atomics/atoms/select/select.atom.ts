import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'atom-select',
  templateUrl: './select.atom.html',
  styleUrls: ['./select.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectAtom implements OnInit {
  @Input() inputControl = new FormControl('');
  @Input() options = [];
  @Input() titleSellect = 'Thể loại';
  @Input() widthClass = 'w-72';

  constructor() {
    this.options = this.getOptions();
  }

  ngOnInit(): void { }

  getOptions() {
    return [
      { id: '1', name: 'Lãng mạn' },
      { id: '2', name: 'Kiếm hiệp' },
      { id: '3', name: 'Trinh thám' },
      { id: '4', name: 'Kinh dị' },
      { id: '5', name: 'Xuyên không' },
    ];
  }
}

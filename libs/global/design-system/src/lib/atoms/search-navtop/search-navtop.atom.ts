import { FormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'search-navtop',
  templateUrl: './search-navtop.atom.html',
  styleUrls: ['./search-navtop.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class searchNavtopAtom implements OnInit {
  @Input() faIcon = faSearch;
  @Input() placeholder = 'Nhập tìm kiếm';
  @Input() control = new FormControl();
  @Input() id = 'search-topnav';
  @Output() searchEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

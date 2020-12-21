import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'option-link',
  templateUrl: './option-link.atom.html',
  styleUrls: ['./option-link.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionLinkAtom implements OnInit {

  constructor() { }
  @Input() suggestText;
  @Input() link;
  @Input() title;
  ngOnInit(): void {
  }

}

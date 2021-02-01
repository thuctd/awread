import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atom-text-link',
  templateUrl: './text-link.atom.html',
  styleUrls: ['./text-link.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextLinkAtom implements OnInit {
  @Output() submitEvent = new EventEmitter();
  @Input() text = 'textLink';
  @Input() href = '';
  @Input() color: 'green' | 'gray' = 'green';
  @Input() size: 's' | 'm' | 'l' = 'm';

  constructor() { }

  ngOnInit(): void { }
}

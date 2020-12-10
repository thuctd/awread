import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'awread-left-nav',
  templateUrl: './left-nav.section.html',
  styleUrls: ['./left-nav.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftNavSection implements OnInit {

  @Input() data: any[];
  @Input() dataBot: any[];
  @Input() itemTemplate: TemplateRef<HTMLElement>;
  @Input() fullNav: boolean;
  @Output() toggleSide = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}

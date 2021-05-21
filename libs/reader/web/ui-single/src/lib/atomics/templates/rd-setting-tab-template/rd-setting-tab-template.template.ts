import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faUserCircle, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'template-rd-setting-tab-template',
  templateUrl: './rd-setting-tab-template.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RdSettingTabTemplateTemplate implements OnInit {
  @Input() tabs = [
    {
      name: 'Hồ sơ của tôi',
      isActive: false,
      faIcon: faUserCircle,
    },
    {
      name: 'Cài đặt',
      isActive: true,
      faIcon: faCog,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

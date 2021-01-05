import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'molec-rd-dropdown-menu',
  templateUrl: './rd-dropdown-menu.molec.html',
  styleUrls: ['./rd-dropdown-menu.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RdDropdownMenuMolec implements OnInit {
  @Input() dropdownData = [
    {
      "title": "Truyện tự sáng tác",
      "menu":[
        {
          "href": "/",
          "title":"Truyện dài"
        },
        {
          "href": "/",
          "title":"Truyện ngắn"
        },
        {
          "href": "/",
          "title":"Truyện tản văn"
        },
      ] 
    },
    {
      "title": "Truyện sưu tầm",
      "menu":[
        {
          "href": "/",
          "title":"Truyện dài"
        },
        {
          "href": "/",
          "title":"Truyện ngắn"
        },
        {
          "href": "/",
          "title":"Truyện tản văn"
        },
      ] 
    }
  ];
  constructor() { }
  ngOnInit(): void {
  }

}

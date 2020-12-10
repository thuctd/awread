import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-single',
  templateUrl: './single.layout.html',
  styleUrls: ['./single.layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleLayout implements OnInit {

  fullNav = true;
  hasBackdrop = false;
  mode: "push" | "over" | "side" = "side";
  navData = [
    { id: 0, link: "dashboard", name: "dashboard", icon: "assets/icons/Dashboard.png" },
    { id: 1, link: "profile", name: "profile", icon: "assets/icons/user.png" },
    { id: 2, link: "books", name: "books", icon: "assets/icons/books.png" },
    { id: 3, link: "", name: "upload", icon: "assets/icons/upload.png" },
  ];
  constructor() {}

  ngOnInit(): void {}

}

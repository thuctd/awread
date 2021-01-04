import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'organ-home-tags',
  templateUrl: './home-tags.organ.html',
  styleUrls: ['./home-tags.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTagsOrgan implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

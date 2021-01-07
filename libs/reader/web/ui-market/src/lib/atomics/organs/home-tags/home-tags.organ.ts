import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'home-tags',
  templateUrl: './home-tags.organ.html',
  styleUrls: ['./home-tags.organ.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTagsOrgan implements OnInit {
  @Input() titlePage = 'Tags'
  constructor() { }

  ngOnInit(): void {
  }

}

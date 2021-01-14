import { Component, OnInit, ChangeDetectionStrategy,Input } from '@angular/core';

@Component({
  selector: 'smailimg-profile',
  templateUrl: './smailimg-profile.atom.html',
  styleUrls: ['./smailimg-profile.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmailimgProfileAtom implements OnInit {
  @Input() srcImg = 'https://i.pinimg.com/originals/5b/57/13/5b5713348f5e82480cc4fd030a54b339.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'organ-step-experience',
  templateUrl: './step-experience.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepExperienceOrgan implements OnInit {
  @Input() ages = [
    {
      id: '1',
      name: '6-13',
    },
    {
      id: '2',
      name: '13-18',
    },
    {
      id: '3',
      name: '18+',
    },
  ];
  @Input() selectMultiples = [
    {
      title: 'Gợi ý truyện theo sở thích',
      placeholder: 'Thể loại',
      formControlName: 'genreIds',
      id: 'genreId',
      name: 'name'
    },
    {
      title: 'Giới hạn nội dung',
      placeholder: 'Giới hạn nội dung',
      formControlName: 'ages',
      id: 'id',
      name: 'name'
    }
  ]

  @Input() experienceForm;
  @Input() genres;
  @Input() isMobile = false;
  constructor() { }

  ngOnInit(): void {
  }

}

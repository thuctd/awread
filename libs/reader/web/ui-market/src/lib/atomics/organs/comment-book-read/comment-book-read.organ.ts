import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'organ-comment-book-read',
  templateUrl: './comment-book-read.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentBookReadOrgan implements OnInit {
  @Input() comments = [
    {
      userName: 'Yasuo',
      content: 'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
      createAt: '04/06/2020 at 1:05 PM',
      insideComment: [
        {
          userName: 'Leesin',
          content:
            'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
          createAt: '04/06/2020 at 1:05 PM',
        },
        {
          userName: 'Yasuo',
          content:
            'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
          createAt: '04/06/2020 at 1:05 PM',
        },
      ],
    },
    {
      userName: 'Leesin',
      content: 'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
      createAt: '04/06/2020 at 1:05 PM',
      insideComment: [
        {
          userName: 'Leesin',
          content:
            'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
          createAt: '04/06/2020 at 1:05 PM',
        },
      ],
    },
    {
      userName: 'Leesin',
      content: 'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
      createAt: '04/06/2020 at 1:05 PM',
      insideComment: [],
    },
    {
      userName: 'Leesin',
      content: 'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
      createAt: '04/06/2020 at 1:05 PM',
      insideComment: [
        {
          userName: 'Yasuo',
          content:
            'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
          createAt: '04/06/2020 at 1:05 PM',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'molec-comment-item',
  templateUrl: './comment-item.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentItemMolec implements OnInit {
  @Input() isMenuOpen = false;
  @Input() comment = {
    userName: 'Lê Ngọc Quý',
    content: 'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
    createAt: '04/06/2020 at 1:05 PM',
    insideComment: [
      {
        userName: 'Lê Ngọc Quý',
        content: 'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
        createAt: '04/06/2020 at 1:05 PM',
      },
      {
        userName: 'Lê Ngọc Quý',
        content: 'Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi Hay quá bạn ơi',
        createAt: '04/06/2020 at 1:05 PM',
      },
    ],
  };

  @Output() clickBtn = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleMenu($event?) {
    if ($event && this.comment.insideComment.length > 0)
      $event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }
}

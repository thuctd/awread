import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'atom-review-input',
  templateUrl: './review-input.atom.html',
  styleUrls: ['./review-input.atom.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewInputAtom implements OnInit {
  @Input() placeholder = 'Để lại một bình luận...';
  @Input() inputControl: FormControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}

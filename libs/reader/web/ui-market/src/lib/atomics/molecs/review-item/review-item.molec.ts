import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faThumbsUp, faThumbsDown,faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'molec-review-item',
  templateUrl: './review-item.molec.html',
  styleUrls: ['./review-item.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewItemMolec implements OnInit {
 icons = {faThumbsUp, faThumbsDown, faHeart};
 submitEvent(event){
   console.log('submit action');
 }
  constructor() { }

  ngOnInit(): void {
  }

}

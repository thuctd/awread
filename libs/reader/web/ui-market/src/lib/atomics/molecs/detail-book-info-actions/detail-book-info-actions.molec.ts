import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faEye , faComments} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'molec-detail-book-info-actions',
  templateUrl: './detail-book-info-actions.molec.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBookInfoActionsMolec implements OnInit {
  icons = {faEye, faComments}
  constructor() { }

  ngOnInit(): void {
  }

}

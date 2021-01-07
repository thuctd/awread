import {
  BooksFacade,
  CurrentUserFacade,
} from '@awread/writer/web/feature-auth';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-creation',
  templateUrl: './creation.layout.html',
  styleUrls: ['./creation.layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreationLayout implements OnInit {
  constructor(
    private currentUserFacade: CurrentUserFacade,
    private booksFacade: BooksFacade
  ) {}

  ngOnInit(): void {
    this.currentUserFacade.getCurrentUser().subscribe();
    this.booksFacade.getAllBooks().subscribe();
  }
}

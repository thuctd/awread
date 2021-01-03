import { BooksFacade } from './../../../../../feature-auth/src/lib/facades/books.facade';
import { CurrentUserFacade } from './../../../../../feature-auth/src/lib/facades/current-user.facade';
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
    this.booksFacade.setBooksToStore().subscribe();
  }
}

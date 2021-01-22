import {
  BooksFacade,
  CategoryFacade,
  CurrentUserFacade,
  GenresFacade,
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
    private booksFacade: BooksFacade,
    private categoryFacade: CategoryFacade,
    private genresFacade: GenresFacade
  ) {}

  ngOnInit(): void {
    this.currentUserFacade.getCurrentUser().subscribe();
    this.booksFacade.getAllBooks().subscribe();
    this.categoryFacade.getAllCategories().subscribe();
    this.genresFacade.getAllGenres().subscribe();
  }
}

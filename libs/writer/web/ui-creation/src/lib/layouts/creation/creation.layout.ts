import { BooksFacade, CategoryFacade, CurrentUserFacade, GenresFacade } from '@awread/writer/web/feature-auth';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'awread-creation',
  templateUrl: './creation.layout.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreationLayout implements OnInit {
  constructor(
    private currentUserFacade: CurrentUserFacade,
    private booksFacade: BooksFacade,
    private categoryFacade: CategoryFacade,
    private genresFacade: GenresFacade
  ) { }

  ngOnInit(): void {
    this.currentUserFacade.getCurrentUser();
    this.categoryFacade.getAllCategories();
    this.genresFacade.getAllGenres();
    this.getAllBook();
  }

  private getAllBook() {
    this.booksFacade.setLoading(true);
    this.booksFacade.getAllBooks().subscribe(() => {
      this.booksFacade.setLoading(false);
    });
  }
}

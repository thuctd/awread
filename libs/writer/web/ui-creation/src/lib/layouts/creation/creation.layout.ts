import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CurrentUserFacade } from '@awread/core/users';
import { CategoriesFacade } from '@awread/core/categories';
import { GenresFacade } from '@awread/core/genres';

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
    private categoriesFacade: CategoriesFacade,
    private genresFacade: GenresFacade,
  ) { }

  ngOnInit(): void {
    this.currentUserFacade.getCurrentUser().subscribe(() => this.checkWriter());
    this.categoriesFacade.getAllCategories().subscribe();
    this.genresFacade.getAllGenres().subscribe();

  }

  private checkWriter() {
    const role = this.currentUserFacade.currentUserQuery.getRole();
    if (role == 'reader') {
      console.log('bat material dialog hien dieu khoan cho writer');
    }
  }
}

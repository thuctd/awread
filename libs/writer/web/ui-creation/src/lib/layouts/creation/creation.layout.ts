import { WrtRulePopupTemplate } from './../../atomics/templates/wrt-rule-popup/wrt-rule-popup.template';
import { MatDialog } from '@angular/material/dialog';
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
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.currentUserFacade.getCurrentUser().subscribe(() => this.checkWriter());
    this.categoriesFacade.getAllCategories().subscribe();
    this.genresFacade.getAllGenres().subscribe();

  }

  private checkWriter() {
    const role = this.currentUserFacade.currentUserQuery.getRole();
    // if (role == 'reader') {
    this.openPreview();
    // }
  }

  openPreview(): void {
    this.matDialog.open(WrtRulePopupTemplate, {
      width: '33rem',
      height: '50rem',
      disableClose: true
    });
  }
}

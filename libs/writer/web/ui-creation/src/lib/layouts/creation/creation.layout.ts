import { WrtRulePopupTemplate } from './../../atomics/templates/wrt-rule-popup/wrt-rule-popup.template';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CurrentUserFacade } from '@awread/core/users';
import { CategoriesFacade } from '@awread/core/categories';
import { GenresFacade } from '@awread/core/genres';
import { SnackbarService } from '@awread/global/packages';

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
    private snackbarService: SnackbarService,
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
    if (role == 'reader') {
      this.openPreview();
    }
  }

  openPreview(): void {
    const dialogRef = this.matDialog.open(WrtRulePopupTemplate, {
      width: '50%',
      height: '75%',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.currentUserFacade.agreeBecomeWriter();
      }
    });
  }
}

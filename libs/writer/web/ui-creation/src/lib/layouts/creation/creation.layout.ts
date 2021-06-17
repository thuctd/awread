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
      width: '38rem',
      height: '60rem',
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.currentUserFacade.agreeBecomeWriter();
      } else {
        this.snackbarService.showSuccess('Chúc bạn một ngày tốt lành!');
      }
    });
  }
}

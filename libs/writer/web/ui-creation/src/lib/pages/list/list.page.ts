import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Directive, Injectable, OnInit, ChangeDetectorRef } from '@angular/core';
import { CreationsFacade } from '@awread/core/creations';
import { MatDialog } from '@angular/material/dialog';
import { WrtDetailPopupBookTemplate } from '../../atomics/templates';
import { SnackbarService } from '@awread/global/packages';
import { ChaptersFacade } from '@awread/core/chapters';


@Injectable({
  providedIn: 'root',
})
@Directive()
export class ListPage implements OnInit {
  creations$ = this.creationsFacade.creations$;
  loading$ = this.creationsFacade.loading$;
  searchTerm$ = this.creationsFacade.searchCreationsQuery.searchTerm$;
  constructor(
    private router: Router,
    private creationsFacade: CreationsFacade,
    private matDialog: MatDialog,
    private snackbarService: SnackbarService,
    private chaptersFacade: ChaptersFacade,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.creationsFacade.get().subscribe(value => {
      console.log('value', value);
    });
    this.watchingSearchTerm();
  }

  bookEvent(event) {
    console.log('event', event);
    switch (event.type) {
      case 'create':
        this.router.navigate(['list', 'new', 'detail']);
        break;
      case 'detail':
        this.router.navigate(['list', event.bookId, 'toc']);
        break;
      case 'preview':
        this.openPreview();
        break;
      case 'static':
        this.snackbarService.showWarning('Tính năng này đang hoàn hiện');
        break;
      case 'share':
        this.snackbarService.showWarning('Tính năng này đang hoàn hiện');
        break;
      case 'create-chapter':
        this.chaptersFacade.fetchLatestChapterPosition(event.bookId).subscribe(position => {
          this.router.navigate(['list', event.bookId, 'toc', 'new', 'writing', { position: position }]);
        })
        break;
      case 'edit':
        this.router.navigate(['list', event.bookId, 'detail']);
        break;
      case 'delete':
        this.creationsFacade.delete(event.bookId).subscribe(result => {
          console.log('result', result);
        })
        break;

      default:
        console.log('event', event);
        break;
    }
  }

  openPreview(): void {
    this.matDialog.open(WrtDetailPopupBookTemplate, {
      width: '55rem',
      height: '33rem',
    });
  }

  watchingSearchTerm() {
    this.creations$ = this.searchTerm$.pipe(
      switchMap(value => {
        return this.creationsFacade.searchCreationByTerm(value);
      })
    );
    this.cd.detectChanges();
  }
}

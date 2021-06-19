import { PersistNgFormPlugin } from '@datorama/akita';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { CategoriesFacade } from '@awread/core/categories';
import { FormGroup, FormBuilder } from '@angular/forms';
import { filter, map, switchMap, tap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ChangeDetectorRef, Directive, Injectable, OnInit } from '@angular/core';
import { CreationsFacade } from '@awread/core/creations';
import { MatDialog } from '@angular/material/dialog';
import { WrtDetailPopupBookTemplate } from '../../atomics/templates';
import { SnackbarService } from '@awread/global/packages';
import { ChaptersFacade } from '@awread/core/chapters';
import { Observable } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ListPage implements OnInit {
  filtersForm: FormGroup;
  persistForm: PersistNgFormPlugin;
  isLoading$: Observable<boolean>;
  hasNextPage$: Observable<boolean>;
  creations$ = this.creationsFacade.creations$;
  categories$ = this.categoriesFacade.categories$;
  loading$ = this.creationsFacade.loading$;
  searchTerm$ = this.creationsFacade.searchCreationsQuery.searchTerm$;
  constructor(
    private router: Router,
    private creationsFacade: CreationsFacade,
    private categoriesFacade: CategoriesFacade,
    private matDialog: MatDialog,
    private snackbarService: SnackbarService,
    private chaptersFacade: ChaptersFacade,
    private cd: ChangeDetectorRef,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    // this.watchingSearchTerm();
    this.creationsFacade.get().subscribe(() => { });
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
        this.openPreview(event.bookId);
        break;
      case 'static':
        this.snackbarService.showWarning('Tính năng này đang hoàn hiện');
        break;
      case 'share':
        this.snackbarService.showWarning('Tính năng này đang hoàn hiện');
        break;
      case 'create-chapter':
        this.chaptersFacade.fetchLatestChapterPosition(event.bookId).subscribe((position) => {
          this.router.navigate(['list', event.bookId, 'toc', 'new', 'writing', { position: position }]);
        });
        break;
      case 'edit':
        this.router.navigate(['list', event.bookId, 'detail']);
        break;
      case 'delete':
        this.creationsFacade.delete(event.bookId).subscribe((result) => {
          console.log('result', result);
        });
        break;

      default:
        console.log('event', event);
        break;
    }
  }

  openPreview(bookId): void {
    this.creationsFacade.selectEntity(bookId).subscribe((value) => {
      this.matDialog.open(WrtDetailPopupBookTemplate, {
        width: '55rem',
        height: '33rem',
        data: {
          title: value.book.title,
          description: value.book.description,
          srcImg: value.book,
        },
      });
    });
  }

  filterBooksEvent() {
    this.creationsFacade.getFilterBooks().pipe(untilDestroyed(this)).subscribe(() => { });
    this.isLoading$ = this.creationsFacade.creationsQuery.selectLoading();
  }

  watchingSearchTerm() {
    this.creations$ = this.searchTerm$.pipe(
      untilDestroyed(this),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value) => {
        return this.creationsFacade.searchCreationByTerm(value);
      })
    );
    this.cd.detectChanges();
  }

  private initForm() {
    this.filtersForm = this.fb.group({
      categoryId: [''],
      completed: [''],
    });

    this.persistForm = new PersistNgFormPlugin(
      this.creationsFacade.creationsQuery,
      'ui.filters')
      .setForm(this.filtersForm);
  }
}

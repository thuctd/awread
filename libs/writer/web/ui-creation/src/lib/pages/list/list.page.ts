import { PersistNgFormPlugin } from '@datorama/akita';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { CategoriesFacade } from '@awread/core/categories';
import { FormGroup, FormBuilder } from '@angular/forms';
import { filter, map, switchMap, tap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
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
  isLoading$ = this.creationsFacade.creationsQuery.selectLoading();
  hasNextPage$: Observable<boolean>;
  creations$ = this.creationsFacade.creations$;
  categories$ = this.categoriesFacade.categories$;
  loading$ = this.creationsFacade.loading$;
  searchTerm$ = this.creationsFacade.creationsQuery.selectSearchTerm();
  constructor(
    private creationsFacade: CreationsFacade,
    private categoriesFacade: CategoriesFacade,
    private matDialog: MatDialog,
    private snackbarService: SnackbarService,
    private chaptersFacade: ChaptersFacade,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.watchingSearchTerm();
    this.creationsFacade.get().subscribe(() => { });
  }

  bookEvent(event) {
    // console.log('event', event);
    switch (event.type) {
      case 'create':
        this.creationsFacade.creationsRoutingGear.createBook();
        break;
      case 'detail':
        this.creationsFacade.creationsRoutingGear.bookToc(event.bookId);
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
          this.creationsFacade.creationsRoutingGear.createChapter(event.bookId, position);
        });
        break;
      case 'edit':
        this.creationsFacade.creationsRoutingGear.editBook(event.bookId);
        break;
      case 'delete':
        this.creationsFacade.delete(event.bookId).subscribe((result) => {
          // console.log('result', result);
        });
        break;

      default:
        // console.log('event', event);
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
  }

  watchingSearchTerm() {
    this.searchTerm$.pipe(
      untilDestroyed(this),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((value) => {
        return this.creationsFacade.searchCreationByTerm(value);
      })
    ).subscribe();
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

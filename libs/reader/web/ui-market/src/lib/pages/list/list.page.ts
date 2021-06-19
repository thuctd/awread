import { debounceTime } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChangeDetectorRef, Injectable, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Directive, OnInit, OnDestroy } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PersistNgFormPlugin } from '@datorama/akita';
import { BooksFacade, ListBooksFacade } from '@awread/core/books';
import { GenresFacade } from '@awread/core/genres';
import { CategoriesFacade } from '@awread/core/categories';
import { Observable } from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ListPage implements OnInit, OnDestroy {
  debugCount$ = this.booksFacade.categoryBooksQuery.selectCount();
  filtersForm: FormGroup;
  persistForm: PersistNgFormPlugin;
  categoryList$ = this.categoriesFacade.categories$;
  topBookList$ = this.booksFacade.topBooks$;
  genreList$ = this.genresFacade.genres$;
  books$;
  isLoading$: Observable<boolean>;
  hasNextPage$: Observable<boolean>;
  typeBook: 'collected' | 'composed';
  loading: boolean;
  selectedCategoryId: string;
  titlePage: string;
  constructor(
    private listBooksFacade: ListBooksFacade,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private router: Router,
    private categoriesFacade: CategoriesFacade,
    private booksFacade: BooksFacade,
    private genresFacade: GenresFacade,
  ) { }
  ngOnDestroy(): void { }

  ngOnInit(): void {
    this.initForm();
    this.updateForm();
    this.booksFacade.getTopBooks().subscribe();
    this.genresFacade.getAllGenres().subscribe();
    this.watchRouting();
  }

  watchRouting() {
    this.activatedRoute.parent.url.subscribe(([urlSegment]) => {
      switch (urlSegment.path) {
        case 'collected':
          this.typeBook = urlSegment.path;
          this.titlePage = 'Truyện sưu tầm';
          break;
        case 'composed':
          this.typeBook = urlSegment.path;
          this.titlePage = 'Truyện tự sáng tác';
          break;

        default:
          this.typeBook = 'composed';
          this.titlePage = 'Truyện tự sáng tác';
          break;
      }
      this.selectedCategoryId = urlSegment.parameterMap.get('categoryId');
      this.switchTab(this.selectedCategoryId);
    })
  }

  switchTab(categoryId: string) {
    this.selectedCategoryId = categoryId;
    this.router.navigate([this.typeBook, { categoryId: this.selectedCategoryId }]);
    this.filterItemsByCategory(this.selectedCategoryId);
    this.cd.detectChanges();
  }

  filterItemsByCategory(categoryId: string) {
    this.loading = true;
    this.booksFacade.getCategoryBooks(categoryId).pipe(untilDestroyed(this)).subscribe(() => {
      this.loading = false;
      this.cd.detectChanges();
    });
    this.books$ = this.booksFacade.categoryBooksQuery.selectAll();
    this.isLoading$ = this.booksFacade.categoryBooksQuery.selectLoading();
    this.hasNextPage$ = this.booksFacade.categoryBooksQuery.selectHasNextPage();
  }

  filterBooks() {
    this.loading = true;
    this.booksFacade.getFilterBooks(this.selectedCategoryId).pipe(untilDestroyed(this)).subscribe(() => {
      this.loading = false;
    });
    this.isLoading$ = this.booksFacade.categoryBooksQuery.selectLoading();
    this.hasNextPage$ = this.booksFacade.categoryBooksQuery.selectHasNextPage();
  }

  nativeTopBook() {
    this.router.navigate(['/index', 'top-books']);
  }

  onMoreBooks() {
    this.fetchBooks();
  }

  private fetchBooks() {
    if (this.booksFacade.categoryBooksQuery.getHasNextPage()) {
      this.listBooksFacade.getCategoryBookByCursor(this.selectedCategoryId, 'add').pipe(untilDestroyed(this)).subscribe();
    }
  }

  private updateForm() {
    this.activatedRoute.parent.url.subscribe(([urlSegment]) => {
      this.filtersForm.patchValue({
        typeBook: urlSegment.path
      });
    })
  }

  private initForm() {
    this.filtersForm = this.fb.group({
      typeBook: [''],
      genres: [''],
      criteria: [''],
      completed: [''],
      postingDate: [''],
    });

    this.persistForm = new PersistNgFormPlugin(
      this.booksFacade.booksQuery,
      'ui.filters')
      .setForm(this.filtersForm);
  }

}

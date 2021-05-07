import { PersistNgFormPlugin } from '@datorama/akita';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChangeDetectorRef, Directive, Injectable, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map, tap } from 'rxjs/operators';

import { Category } from 'libs/core/categories/src/lib/models';
import { BooksQuery } from 'libs/core/books/src/lib/states/books';
import { BooksFacade } from 'libs/core/books/src/lib/facades/books.facade';
import { GenresFacade } from 'libs/core/genres/src/lib/facades/genres.facade';
import { CategoryFacade } from 'libs/core/categories/src/lib/facades/category.facade';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class CollectedPage implements OnInit, OnDestroy {
  filtersForm: FormGroup;
  persistForm: PersistNgFormPlugin;
  isLoading$ = this.booksFacade.selectLoadingAkita();
  categoryList$ = this.categoryFacede.categories$;
  topBookList$ = this.booksFacade.topBooks$;
  genreList$ = this.genresFacade.genres$;
  collected$ = this.booksFacade.collected$;
  bookList$ = this.booksFacade.books$;
  filteredBooks$;

  bookId: string;
  categoryId: string;
  type: string;
  typeBook: string;

  selectedTab = 'longbook';
  constructor(
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private router: Router,
    private categoryFacede: CategoryFacade,
    private booksFacade: BooksFacade,
    private booksQuery: BooksQuery,
    private fb: FormBuilder,
    private genresFacade: GenresFacade
  ) { }
  ngOnDestroy(): void { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data =>
      this.typeBook = data.title
    );
    this.categoryFacede.getAllCategories().subscribe();
    this.booksFacade.getAllBooks().subscribe();
    this.booksFacade.getTopBooks().subscribe();
    this.booksFacade.getCollectedBooks().subscribe();
    this.genresFacade.getAllGenres().subscribe();
    this.checkActiveTab();
    this.loadFirstByCategory();
    this.initForm();
    this.updateForm();
  }

  switchTab(type: string) {
    // this.categoryFacede.getDetailCategoryByType(type).subscribe(res => {
    //   this.categoryId = res.id;
    //   this.selectedTab = res.type;
    //   this.filtersForm.get('category').setValue(this.categoryId);
    //   if (!this.selectedTab) {
    //     return this.router.navigate(['/']);
    //   }
    //   return this.router.navigate(['/collected', { type: this.selectedTab }]);
    // })
  }

  filterItemsByCategory(category: Category) {
    this.filteredBooks$ = this.booksFacade.getCategoryBooks(category.categoryId);
  }

  filterBooks() {
    this.filteredBooks$ = this.booksFacade.getFilterBooks()
      .pipe(
        tap(results => {
          console.log('results', results);
        })
      );
  }

  nativeShortBook() {
    this.router.navigate(['/short-story'])
  }

  nativeLongBook() {
    this.router.navigate(['/long-story'])
  }

  nativeTopBook() {
    this.router.navigate(['/top-book'])
  }

  nativeProse() {
    this.router.navigate(['/novel'])
  }

  private loadFirstByCategory() {
    const type = this.activatedRoute.snapshot.paramMap.get('type');
    // this.categoryFacede.getDetailCategoryByType(type).subscribe(
    //   res => {
    //     this.filteredBooks$ = this.booksFacade.getCategoryBooks(res.id);
    //     this.cd.detectChanges();
    //   }
    // );
  }

  private checkActiveTab() {
    return this.activatedRoute.paramMap.pipe(untilDestroyed(this)).subscribe((params) => {
      this.type = params.get('type');
      this.switchTab(this.type);
      this.cd.detectChanges();
    });
  }

  private updateForm() {
    this.filtersForm.patchValue({
      typeBook: this.typeBook
    });
  }

  private initForm() {
    this.filtersForm = this.fb.group({
      typeBook: [''],
      category: [''],
      genre: [''],
      status: [''],
      publishedAt: ['']
    });

    this.persistForm = new PersistNgFormPlugin(
      this.booksQuery,
      'ui.filters')
      .setForm(this.filtersForm);
  }
}

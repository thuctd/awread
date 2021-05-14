/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Directive, OnInit, OnDestroy } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs/operators';
import { PersistNgFormPlugin } from '@datorama/akita';
import { Category } from '@awread/core/categories';
import { BooksQuery } from 'libs/core/books/src/lib/states/books';
import { BooksFacade } from 'libs/core/books/src/lib/facades/books.facade';
import { GenresFacade } from 'libs/core/genres/src/lib/facades/genres.facade';
import { CategoriesFacade } from 'libs/core/categories/src/lib/facades/categories.facade';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ComposedPage implements OnInit, OnDestroy {
  filtersForm: FormGroup;
  persistForm: PersistNgFormPlugin;
  categoryList$ = this.categoriesFacade.categories$;
  topBookList$ = this.booksFacade.topBooks$;
  genreList$ = this.genresFacade.genres$;
  filteredBooks$;
  typeBook: string;
  selectedCategoryId: string;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private router: Router,
    private categoriesFacade: CategoriesFacade,
    private booksFacade: BooksFacade,
    private booksQuery: BooksQuery,
    private genresFacade: GenresFacade
  ) { }
  ngOnDestroy(): void { }

  ngOnInit(): void {
    this.initForm();
    this.updateForm();
    this.booksFacade.getAllBooks().subscribe();
    this.booksFacade.getTopBooks().subscribe();
    this.genresFacade.getAllGenres().subscribe();
    this.booksFacade.getComposedBooks().subscribe();
    this.activatedRoute.parent.url.subscribe(([urlSegment]) => {
      this.typeBook = urlSegment.path;
      this.selectedCategoryId = urlSegment.parameterMap.get('categoryId');
      this.switchTab(this.selectedCategoryId);

    })

    // this.checkActiveTab();
    // this.loadFirstByCategory();


  }

  switchTab(categoryId: string) {
    this.selectedCategoryId = categoryId;
    this.filtersForm.get('category').setValue(this.selectedCategoryId);
    this.router.navigate(['/composed', { categoryId: this.selectedCategoryId }]);
    this.filterItemsByCategory(categoryId);
    this.cd.detectChanges();
    // this.selectedTabCategoryId = 'Truyện ngắn';
    // this.selectedTab = res[0].name;

    // this.categoriesFacade.getDetailCategory(categoryId).subscribe(res => {
    //   this.categoryId = res[0].categoryId;
    //   this.selectedTab = res[0].name;
    //   //   this.filtersForm.get('category').setValue(this.categoryId);
    //   //   if (!this.selectedTab) {
    //   //     return this.router.navigate(['/']);
    //   //   }
    //   //   return this.router.navigate(['/composed', { type: this.categoryId }]);
    // })
  }

  filterItemsByCategory(categoryId) {
    this.filteredBooks$ = this.booksFacade.getCategoryBooks(categoryId);
  }

  filterBooks() {
    // this.filteredBooks$ = this.booksFacade.getFilterBooks();
  }

  // nativeShortBook() {
  //   this.router.navigate(['/short-story'])
  // }

  // nativeLongBook() {
  //   this.router.navigate(['/long-story'])
  // }

  // nativeTopBook() {
  //   this.router.navigate(['/top-book'])
  // }

  // nativeProse() {
  //   this.router.navigate(['/novel'])
  // }

  // private loadFirstByCategory() {
  //   const type = this.activatedRoute.snapshot.paramMap.get('type')
  //   this.categoriesFacade.getDetailCategory(type).subscribe(
  //     res => {
  //       this.filteredBooks$ = this.booksFacade.getCategoryBooks(res[0].categoryId);
  //       this.cd.detectChanges();
  //     }
  //   );
  // }

  // private checkActiveTab() {
  //   return this.activatedRoute.paramMap.pipe(untilDestroyed(this)).subscribe((params) => {
  //     this.type = params.get('type');
  //     this.switchTab(this.type);
  //     this.cd.detectChanges();
  //   });
  // }

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

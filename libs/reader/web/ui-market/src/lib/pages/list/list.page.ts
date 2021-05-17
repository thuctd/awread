import { tap } from 'rxjs/operators';
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Directive, OnInit, OnDestroy } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PersistNgFormPlugin } from '@datorama/akita';
import { BooksFacade } from '@awread/core/books';
import { GenresFacade } from '@awread/core/genres';
import { CategoriesFacade } from '@awread/core/categories';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ListPage implements OnInit, OnDestroy {
  filtersForm: FormGroup;
  persistForm: PersistNgFormPlugin;
  categoryList$ = this.categoriesFacade.categories$;
  topBookList$ = this.booksFacade.topBooks$;
  genreList$ = this.genresFacade.genres$;
  filteredBooks$;
  typeBook: 'collected' | 'composed';
  selectedCategoryId: string;
  titlePage: string;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private router: Router,
    private categoriesFacade: CategoriesFacade,
    private booksFacade: BooksFacade,
    private genresFacade: GenresFacade
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
    this.filtersForm.get('category').setValue(this.selectedCategoryId);
    this.router.navigate([this.typeBook, { categoryId: this.selectedCategoryId }]);
    this.filterItemsByCategory(categoryId);
    this.cd.detectChanges();
  }

  filterItemsByCategory(categoryId) {
    this.filteredBooks$ = this.booksFacade.getCategoryBooks(categoryId).pipe(
      tap(res => console.log(res))
    );
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
      this.booksFacade.booksQuery,
      'ui.filters')
      .setForm(this.filtersForm);
  }

  filterBooks() {
    this.filteredBooks$ = this.booksFacade.getFilterBooks();
  }

}

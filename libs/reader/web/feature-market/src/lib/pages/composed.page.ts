import { FormBuilder, FormGroup } from '@angular/forms';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Directive, OnInit, OnDestroy } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Category } from '../models';
import { map } from 'rxjs/operators';
import { BooksFacade, CategoryFacade, GenresFacade } from '../facades';
import { BooksQuery } from '../states/books';
import { PersistNgFormPlugin } from '@datorama/akita';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ComposedPage implements OnInit, OnDestroy {
  filtersForm: FormGroup;
  persistForm: PersistNgFormPlugin;
  bookList$ = this.booksFacade.bookList$;
  categoryList$ = this.categoryFacede.categoryList$;
  topBookList$ = this.booksFacade.topBookList$;
  genreList$ = this.genresFacade.genreList$;
  filteredBooks$;

  bookId: string;
  categoryId: string;
  type: string;

  selectedTab = 'longbook';
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private cd: ChangeDetectorRef, private router: Router, private categoryFacede: CategoryFacade, private booksFacade: BooksFacade, private booksQuery: BooksQuery, private genresFacade: GenresFacade) { }
  ngOnDestroy(): void { }

  ngOnInit(): void {
    this.categoryFacede.getAllCategories().subscribe();
    this.booksFacade.getAllBooks().subscribe();
    this.booksFacade.getTopBooks().subscribe();
    this.genresFacade.getAllGenres().subscribe();
    this.checkActiveTab();
    this.loadFirstByCategory();
    this.initForm();
  }

  switchTab(type: string) {
    this.categoryFacede.getDetailCategoryByType(type).subscribe(res => {
      this.categoryId = res.id;
      this.selectedTab = res.type;
      this.filtersForm.get('category').setValue(this.categoryId);
      if (!this.selectedTab) {
        return this.router.navigate(['/']);
      }
      return this.router.navigate(['/composed', { type: this.selectedTab }]);
    })
  }

  filterItemsByCategory(category: Category) {
    this.filteredBooks$ = this.booksFacade.getCategoryBooks(category.id);
  }

  filterBooks() {
    this.booksQuery.filtersChange$.pipe(
      untilDestroyed(this)
    ).subscribe(filters => {
      console.log(filters);
    });
  }

  private loadFirstByCategory() {
    const type = this.activatedRoute.snapshot.paramMap.get('type')
    this.categoryFacede.getDetailCategoryByType(type).subscribe(
      res => {
        this.filteredBooks$ = this.booksFacade.getCategoryBooks(res.id);
        this.cd.detectChanges();
      }
    );
  }

  private checkActiveTab() {
    return this.activatedRoute.paramMap.pipe(untilDestroyed(this)).subscribe((params) => {
      this.type = params.get('type');
      this.switchTab(this.type);
      this.cd.detectChanges();
    });
  }

  private initForm() {
    this.filtersForm = this.fb.group({
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

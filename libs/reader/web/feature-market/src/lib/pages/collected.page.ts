
import { PersistNgFormPlugin } from '@datorama/akita';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChangeDetectorRef, Directive, Injectable, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs/operators';
import { BooksFacade, CategoryFacade } from '../facades';
import { Category } from '../models';
import { BooksQuery } from '../states/books';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class CollectedPage implements OnInit, OnDestroy {
  filtersForm: FormGroup;
  persistForm: PersistNgFormPlugin;
  bookList$ = this.booksFacade.bookList$;
  categoryList$ = this.categoryFacede.categoryList$;
  topBookList$ = this.booksFacade.topBookList$;
  isLoading$ = this.booksFacade.selectLoadingAkita();
  filteredBooks$;

  bookId: string;
  categoryId: string;
  type: string;

  selectedTab = 'longbook';
  constructor(
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private router: Router,
    private categoryFacede: CategoryFacade,
    private booksFacade: BooksFacade,
    private booksQuery: BooksQuery,
    private fb: FormBuilder
  ) { }
  ngOnDestroy(): void { }

  ngOnInit(): void {
    this.categoryFacede.getAllCategories().subscribe();
    this.booksFacade.getAllBooks().subscribe();
    this.booksFacade.getTopBooks().subscribe();
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
      return this.router.navigate(['/collected', { type: this.selectedTab }]);
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
    const type = this.activatedRoute.snapshot.paramMap.get('type');
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

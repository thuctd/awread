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
    if (type === 'prose') {
      this.selectedTab = 'prose';
      this.router.navigate(['/composed', { type: this.selectedTab }]);
    } else if (type === 'shortbook') {
      this.selectedTab = 'shortbook';
      this.router.navigate(['/composed', { type: this.selectedTab }]);
    } else {
      this.selectedTab = 'longbook';
      this.router.navigate(['/composed', { type: this.selectedTab }]);
    }
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
    this.filteredBooks$ = this.bookList$.pipe(
      map((items) =>
        items.filter((item) => {
          if (type === 'longbook') {
            return item.category.includes(items[0].id);
          } else if (type === 'shortbook') {
            return item.category.includes(items[1].id);
          } else {
            return item.category.includes(items[2].id);
          }
        })
      )
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
      genre: [''],
      status: [''],
      publishedat: ['']
    });

    this.persistForm = new PersistNgFormPlugin(
      this.booksQuery,
      'ui.filters')
      .setForm(this.filtersForm);
  }
}

import { BooksFacade } from '@awread/reader/web/feature-market';
import { CategoryFacade } from '@awread/reader/web/feature-market';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Directive, OnInit, OnDestroy } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Category } from '../models';
import { map } from 'rxjs/operators';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ComposedPage implements OnInit, OnDestroy {
  bookList$ = this.booksFacade.bookList$;
  categoryList$ = this.categoryFacede.categoryList$;
  topBookList$ = this.booksFacade.topBookList$;
  filteredBooks$;

  bookId: string;
  type: string;

  selectedTab = 'longbook';
  constructor(private activatedRoute: ActivatedRoute, private cd: ChangeDetectorRef, private router: Router, private categoryFacede: CategoryFacade, private booksFacade: BooksFacade) { }
  ngOnDestroy(): void { }

  ngOnInit(): void {
    this.categoryFacede.getAllCategories().subscribe();
    this.booksFacade.getAllBooks().subscribe();
    this.booksFacade.getTopBooks().subscribe();
    this.checkActiveTab();
    this.loadFirstByCategory();
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

  private loadFirstByCategory() {
    this.filteredBooks$ = this.bookList$.pipe(
      map((items) =>
        items.filter((item) => {
          return item.category.includes(items[0].id);
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
}

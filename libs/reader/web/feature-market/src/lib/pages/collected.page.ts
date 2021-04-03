import { ChangeDetectorRef, Directive, Injectable, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs/operators';
import { BooksFacade, CategoryFacade } from '../facades';
import { Category } from '../models';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class CollectedPage implements OnInit, OnDestroy {
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
    this.booksFacade.getTopBooks().subscribe();
    this.checkActiveTab();
    this.loadFirstByCategory();
  }

  switchTab(tabName: string) {
    if (tabName === 'prose') {
      this.selectedTab = 'prose';
      this.router.navigate(['/collected', { type: this.selectedTab }]);
    } else if (tabName === 'shortbook') {
      this.selectedTab = 'shortbook';
      this.router.navigate(['/collected', { type: this.selectedTab }]);
    } else {
      this.selectedTab = 'longbook';
      this.router.navigate(['/collected', { type: this.selectedTab }]);
    }
  }

  filterItemsByCategory(category: Category) {
    this.filteredBooks$ = this.booksFacade.getCategoryBooks(category.id);
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
    return this.activatedRoute.paramMap
      .pipe(untilDestroyed(this))
      .subscribe((params) => {
        this.bookId = params.get('bookId');
        this.type = params.get('type');
        this.switchTab(this.type);
        this.cd.detectChanges();
      });
  }
}

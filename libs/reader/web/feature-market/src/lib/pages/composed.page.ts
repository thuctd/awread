import { BooksFacade } from '@awread/reader/web/feature-market';
import { CategoryFacade } from '@awread/reader/web/feature-market';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Directive, OnInit, OnDestroy } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ComposedPage implements OnInit, OnDestroy {
  categoryList$ = this.categoryFacede.categoryList$;
  topBookList$ = this.booksFacede.topBookList$;
  tabsHead = [
    { name: 'Truyện dài', tabName: 'longbook' },
    { name: 'Truyện ngắn', tabName: 'shortbook' },
    { name: 'Tản văn', tabName: 'novel' },
  ];

  bookId: string;
  type: string;

  selectedTab = 'longbook';
  constructor(private activatedRoute: ActivatedRoute, private cd: ChangeDetectorRef, private router: Router, private categoryFacede: CategoryFacade, private booksFacede: BooksFacade) { }
  ngOnDestroy(): void { }

  ngOnInit(): void {
    this.categoryFacede.getAllCategories().subscribe();
    this.booksFacede.getTopBooks().subscribe();
    this.checkActiveTab();
  }

  switchTab(tabName: string) {
    if (tabName === 'novel') {
      this.selectedTab = 'novel';
      this.router.navigate(['/composed', { type: this.selectedTab }]);
    } else if (tabName === 'shortbook') {
      this.selectedTab = 'shortbook';
      this.router.navigate(['/composed', { type: this.selectedTab }]);
    } else {
      this.selectedTab = 'longbook';
      this.router.navigate(['/composed', { type: this.selectedTab }]);
    }
  }

  private checkActiveTab() {
    return this.activatedRoute.paramMap.pipe(untilDestroyed(this)).subscribe((params) => {
      this.bookId = params.get('bookId');
      this.type = params.get('type');
      this.switchTab(this.type);
      this.cd.detectChanges();
    });
  }
}

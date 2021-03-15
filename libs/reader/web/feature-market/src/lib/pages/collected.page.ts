import { ChangeDetectorRef, Directive, Injectable, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class CollectedPage implements OnInit, OnDestroy {
  tabsHead = [
    { name: 'Truyện dài', tabName: 'longbook' },
    { name: 'Truyện ngắn', tabName: 'shortbook' },
    { name: 'Tản văn', tabName: 'novel' },
  ];

  bookId: string;
  type: string;

  selectedTab = 'longbook';
  constructor(private activatedRoute: ActivatedRoute, private cd: ChangeDetectorRef, private router: Router) { }
  ngOnDestroy(): void { }

  ngOnInit(): void {
    this.checkActiveTab();
  }

  switchTab(tabName: string) {
    if (tabName === 'novel') {
      this.selectedTab = 'novel';
      this.router.navigate(['/collected', { type: this.selectedTab }]);
    } else if (tabName === 'shortbook') {
      this.selectedTab = 'shortbook';
      this.router.navigate(['/collected', { type: this.selectedTab }]);
    } else {
      this.selectedTab = 'longbook';
      this.router.navigate(['/collected', { type: this.selectedTab }]);
    }
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

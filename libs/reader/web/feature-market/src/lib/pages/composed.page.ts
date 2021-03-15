import { ChangeDetectorRef, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Directive, OnInit, OnDestroy } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ComposedPage implements OnInit, OnDestroy {
  tabsHead = [
    { name: 'Truyện dài', tabName: 'longbook' },
    { name: 'Truyện ngắn', tabName: 'shortbook' },
    { name: 'Tản văn', tabName: 'novel' },
  ];

  bookId: string;
  type: string;

  selectedTab = 'longbook';
  constructor(
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }
  ngOnDestroy(): void { }

  ngOnInit(): void {
    this.checkActiveTab();
  }


  switchTab(tabName: string) {
    if (tabName === 'novel') {
      this.selectedTab = 'novel';
    } else if (tabName === 'shortbook') {
      this.selectedTab = 'shortbook';
    } else {
      this.selectedTab = 'longbook';
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

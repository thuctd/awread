import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Directive, OnInit, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ComposedPage implements OnInit, OnDestroy {
  tabsHead = [
    { name: 'Truyện dài', tabName: 'longbook' },
    { name: 'Truyện ngắn', tabName: 'shortbook' },
    { name: 'Tiểu thuyết', tabName: 'novel' },
  ];

  bookId: string;
  type: string;

  selectedTab = 'toc';
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnDestroy(): void {}

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
    return this.activatedRoute.paramMap.subscribe((params) => {
      this.bookId = params.get('bookId');
      this.type = params.get('type');
      if (params.get('type') === 'novel') {
        this.selectedTab = 'novel';
      } else if (params.get('type') === 'sb') {
        this.selectedTab = 'shortbook';
      } else {
        this.selectedTab = 'longbook';
      }
    });
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedDesktopLayout, SharedMobileLayout } from '@awread/reader/web/shared';
import { MarketLayout } from './layouts/market/market.layout';

declare const window: Window & { haveMobile: boolean };

const routes: Routes = [
  {
    path: '',
    component: window.innerWidth <= 768 && window?.haveMobile ? SharedMobileLayout : SharedDesktopLayout,
    children: [
      {
        path: '',
        component: MarketLayout,
        children: [
          {
            path: '',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/home-mobile/home-mobile.module').then((m) => m.HomeMobileModule)
                : import('./pages/home-desktop/home-desktop.module').then((m) => m.HomeDesktopModule),
          },

          {
            path: 'books/:bookId/chapters/:chapterId',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/read-mobile/read-mobile.module').then((m) => m.ReadMobileModule)
                : import('./pages/read-desktop/read-desktop.module').then((m) => m.ReadDesktopModule),
          },

          {
            path: 'books/:bookId',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/detail-mobile/detail-mobile.module').then((m) => m.DetailMobileModule)
                : import('./pages/detail-desktop/detail-desktop.module').then((m) => m.DetailDesktopModule),
          },

          {
            path: 'novel',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/novel-mobile/novel-mobile.module').then((m) => m.NovelMobileModule)
                : import('./pages/novel-desktop/novel-desktop.module').then((m) => m.NovelDesktopModule),
          },

          {
            path: 'long-story',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/long-story-mobile/long-story-mobile.module').then((m) => m.LongStoryMobileModule)
                : import('./pages/long-story-desktop/long-story-desktop.module').then((m) => m.LongStoryDesktopModule),
          },

          {
            path: 'short-story',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/short-story-mobile/short-story-mobile.module').then((m) => m.ShortStoryMobileModule)
                : import('./pages/short-story-desktop/short-story-desktop.module').then((m) => m.ShortStoryDesktopModule),
          },

          {
            path: 'composed',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/composed-mobile/composed-mobile.module').then((m) => m.ComposedMobileModule)
                : import('./pages/composed-desktop/composed-desktop.module').then((m) => m.ComposedDesktopModule),
            data: { title: 'composed' },
          },

          {
            path: 'collected',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/collected-mobile/collected-mobile.module').then((m) => m.CollectedMobileModule)
                : import('./pages/collected-desktop/collected-desktop.module').then((m) => m.CollectedDesktopModule),
            data: { title: 'collected' },
          },
          {
            path: 'search',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/search-mobile/search-mobile.module').then((m) => m.SearchMobileModule)
                : import('./pages/search-desktop/search-desktop.module').then((m) => m.SearchDesktopModule),
          },

          {
            path: 'introduction',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/introduction-mobile/introduction-mobile.module').then((m) => m.IntroductionMobileModule)
                : import('./pages/introduction-desktop/introduction-desktop.module').then((m) => m.IntroductionDesktopModule),
          },

          {
            path: 'community',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/community-mobile/community-mobile.module').then((m) => m.CommunityMobileModule)
                : import('./pages/community-desktop/community-desktop.module').then((m) => m.CommunityDesktopModule),
          },

          {
            path: 'news',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/news-mobile/news-mobile.module').then((m) => m.NewsMobileModule)
                : import('./pages/news-desktop/news-desktop.module').then((m) => m.NewsDesktopModule),
          },
          {
            path: 'news/:newsId',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/news-detail-mobile/news-detail-mobile.module').then((m) => m.NewsDetailMobileModule)
                : import('./pages/news-detail-desktop/news-detail-desktop.module').then((m) => m.NewsDetailDesktopModule),
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: '',
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReaderWebUiMarketRoutingModule {}

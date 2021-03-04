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
            path: 'home', loadChildren:
              () => window.innerWidth <= 768 && window?.haveMobile ?
                import('./pages/home-mobile/home-mobile.module').then(m => m.HomeMobileModule) :
                import('./pages/home-desktop/home-desktop.module').then(m => m.HomeDesktopModule)
          },

          {
            path: 'books/:{bookId}/chapters/:{chapterId}', loadChildren:
              () => window.innerWidth <= 768 && window?.haveMobile ?
                import('./pages/read-mobile/read-mobile.module').then(m => m.ReadMobileModule) :
                import('./pages/read-desktop/read-desktop.module').then(m => m.ReadDesktopModule)
          },

          {
            path: 'books/:{bookId}', loadChildren:
              () => window.innerWidth <= 768 && window?.haveMobile ?
                import('./pages/detail-mobile/detail-mobile.module').then(m => m.DetailMobileModule) :
                import('./pages/detail-desktop/detail-desktop.module').then(m => m.DetailDesktopModule)
          },

          {
            path: 'novel', loadChildren:
              () => window.innerWidth <= 768 && window?.haveMobile ?
                import('./pages/novel-mobile/novel-mobile.module').then(m => m.NovelMobileModule) :
                import('./pages/novel-desktop/novel-desktop.module').then(m => m.NovelDesktopModule)
          },

          {
            path: 'long-story', loadChildren:
              () => window.innerWidth <= 768 && window?.haveMobile ?
                import('./pages/long-story-mobile/long-story-mobile.module').then(m => m.LongStoryMobileModule) :
                import('./pages/long-story-desktop/long-story-desktop.module').then(m => m.LongStoryDesktopModule)
          },

          {
            path: 'short-story', loadChildren:
              () => window.innerWidth <= 768 && window?.haveMobile ?
                import('./pages/short-story-mobile/short-story-mobile.module').then(m => m.ShortStoryMobileModule) :
                import('./pages/short-story-desktop/short-story-desktop.module').then(m => m.ShortStoryDesktopModule)
          },

          {
            path: 'composed', loadChildren:
              () => window.innerWidth <= 768 && window?.haveMobile ?
                import('./pages/composed-mobile/composed-mobile.module').then(m => m.ComposedMobileModule) :
                import('./pages/composed-desktop/composed-desktop.module').then(m => m.ComposedDesktopModule)
          },

          {
            path: 'collected', loadChildren:
              () => window.innerWidth <= 768 && window?.haveMobile ?
                import('./pages/collected-mobile/collected-mobile.module').then(m => m.CollectedMobileModule) :
                import('./pages/collected-desktop/collected-desktop.module').then(m => m.CollectedDesktopModule)
          },
          {
            path: 'books', loadChildren:
              () => window.innerWidth <= 768 && window?.haveMobile ?
                import('./pages/list-mobile/list-mobile.module').then(m => m.ListMobileModule) :
                import('./pages/list-desktop/list-desktop.module').then(m => m.ListDesktopModule)
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReaderWebUiMarketRoutingModule { }

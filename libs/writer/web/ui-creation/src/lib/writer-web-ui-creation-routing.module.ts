import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellDesktopLayout, ShellMobileLayout } from '@awread/writer/web/shared';
import { CreationLayout } from './layouts/creation/creation.layout';
import { LoginGuard } from '@awread/writer/web/ui-single';

declare const window: Window & { haveMobile: boolean };

const routes: Routes = [
  {
    path: '',
    component:
      window.innerWidth <= 768 && window?.haveMobile ? ShellMobileLayout : ShellDesktopLayout,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: CreationLayout,
        children: [
          {
            path: '',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/list-mobile/list-mobile.module').then((m) => m.ListMobileModule)
                : import('./pages/list-desktop/list-desktop.module').then(
                  (m) => m.ListDesktopModule
                ),
          },
          {
            path: 'list/:bookId/toc/:chapterId/writing',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/writing-mobile/writing-mobile.module').then(
                  (m) => m.WritingMobileModule
                )
                : import('./pages/writing-desktop/writing-desktop.module').then(
                  (m) => m.WritingDesktopModule
                ),
          },
          {
            path: 'list/:bookId/detail',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/detail-book-mobile/detail-book-mobile.module').then(
                  (m) => m.DetailBookMobileModule
                )
                : import('./pages/detail-book-desktop/detail-book-desktop.module').then(
                  (m) => m.DetailBookDesktopModule
                ),
          },
          {
            path: 'list/:bookId/toc',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/detail-toc-mobile/detail-toc-mobile.module').then(
                  (m) => m.DetailTocMobileModule
                )
                : import('./pages/detail-toc-desktop/detail-toc-desktop.module').then(
                  (m) => m.DetailTocDesktopModule
                ),
          },
          {
            path: 'analytic', loadChildren:
              () => window.innerWidth <= 768 && window?.haveMobile ?
                import('./pages/analytic-mobile/analytic-mobile.module').then(m => m.AnalyticMobileModule) :
                import('./pages/analytic-desktop/analytic-desktop.module').then(m => m.AnalyticDesktopModule)
          },
          { path: 'list', pathMatch: 'full', redirectTo: '' },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriterWebUiCreationRoutingModule { }

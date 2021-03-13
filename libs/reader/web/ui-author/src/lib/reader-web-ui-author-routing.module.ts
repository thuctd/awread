import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedDesktopLayout, SharedMobileLayout } from '@awread/reader/web/shared';

declare const window: Window & { haveMobile: boolean };

const routes: Routes = [
  {
    path: 'author',
    component: window.innerWidth <= 768 && window?.haveMobile ? SharedMobileLayout : SharedDesktopLayout,
    children: [
      {
        path: ':{authorId}',
        loadChildren: () =>
          window.innerWidth <= 768 && window?.haveMobile
            ? import('./pages/author-mobile/author-mobile.module').then((m) => m.AuthorMobileModule)
            : import('./pages/author-desktop/author-desktop.module').then((m) => m.AuthorDesktopModule),
      },
      {
        path: ':{authorId}/books/:{bookId}',
        loadChildren: () =>
          window.innerWidth <= 768 && window?.haveMobile
            ? import('./pages/author-book-mobile/author-book-mobile.module').then((m) => m.AuthorBookMobileModule)
            : import('./pages/author-book-desktop/author-book-desktop.module').then((m) => m.AuthorBookDesktopModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReaderWebUiAuthorRoutingModule {}

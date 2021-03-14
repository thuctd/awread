import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedDesktopLayout, SharedMobileLayout } from '@awread/reader/web/shared';
import { AuthorLayout } from './layouts/author/author.layout';

declare const window: Window & { haveMobile: boolean };

// TODO: 2 trường hợp sẽ xảy ra nếu thõa mãn điều kiện load mặc đình vd: localhost:4200 => sẽ ra được trang home nhưng // lại bị ảnh hưởng khi load ở routing-module ở ui-author??? Ảnh em đính kém ở comment git...
const routes: Routes = [
  {
    path: '',
    component: window.innerWidth <= 768 && window?.haveMobile ? SharedMobileLayout : SharedDesktopLayout,
    children: [
      {
        path: '',
        component: AuthorLayout,
        children: [
          {
            path: ':author/{authorId}',
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReaderWebUiAuthorRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedDesktopLayout, SharedMobileLayout } from '@awread/reader/web/shared';
import { AuthorLayout } from './layouts/author/author.layout';
import { LandingGuard } from '@awread/reader/web/ui-single';


declare const window: Window & { haveMobile: boolean };


const routes: Routes = [

  {
    path: '',
    component: window.innerWidth <= 768 && window?.haveMobile ? SharedMobileLayout : SharedDesktopLayout,
    // canActivate: [LandingGuard],
    children: [
      {
        path: '',
        component: AuthorLayout,
        children: [
          {
            path: 'author/:{authorId}', loadChildren:
              () => window.innerWidth <= 768 && window?.haveMobile ?
                import('./pages/author-mobile/author-mobile.module').then(m => m.AuthorMobileModule) :
                import('./pages/author-desktop/author-desktop.module').then(m => m.AuthorDesktopModule)
          },
          {
            path: 'author/:{authorId}/books/:{bookId}', loadChildren:
              () => window.innerWidth <= 768 && window?.haveMobile ?
                import('./pages/author-book-mobile/author-book-mobile.module').then(m => m.AuthorBookMobileModule) :
                import('./pages/author-book-desktop/author-book-desktop.module').then(m => m.AuthorBookDesktopModule)
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReaderWebUiAuthorRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GlobalCoreModule } from '@awread/global/core';
import {
  ReaderWebSharedModule,
  SharedDesktopLayout,
  SharedMobileLayout,
  NotFoundPage,
} from '@awread/reader/web/shared';
import { ReaderWebUiAuthModule } from '@awread/reader/web/ui-auth';
import { ReaderWebUiAuthorModule } from '@awread/reader/web/ui-author';

declare const window: Window & { haveMobile: boolean };

const routes: Routes = [
  {
    path: '',
    component:
      window.innerWidth <= 768 && window?.haveMobile
        ? SharedMobileLayout
        : SharedDesktopLayout,
    children: [
      {
        path: 'not-found',
        component: NotFoundPage,
      },
      { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    GlobalCoreModule,
    ReaderWebSharedModule,
    ReaderWebUiAuthModule,
    ReaderWebUiAuthorModule,
  ],
  exports: [RouterModule, GlobalCoreModule],
})
export class ReaderWebFeatureShellModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GlobalSettingsModule } from '@awread/global/settings';
import { ReaderWebSharedModule, SharedDesktopLayout, SharedMobileLayout, NotFoundPage } from '@awread/reader/web/shared';
import { ReaderWebUiAuthModule } from '@awread/reader/web/ui-auth';
import { ReaderWebUiAuthorModule } from '@awread/reader/web/ui-author';
import { ReaderWebUiSingleModule } from '@awread/reader/web/ui-single';
import { ReaderWebUiMarketModule } from '@awread/reader/web/ui-market';
import { WriterWebUiAuthModule } from '@awread/writer/web/ui-auth';

declare const window: Window & { haveMobile: boolean };

const routes: Routes = [
  {
    path: '',
    component: window.innerWidth <= 768 && window?.haveMobile ? SharedMobileLayout : SharedDesktopLayout,
    children: [
      {
        path: 'not-found',
        component: NotFoundPage,
      },
    ],
  },
  // { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [

    CommonModule,
    HttpClientModule,
    GlobalSettingsModule,
    ReaderWebSharedModule,
    ReaderWebUiMarketModule,
    ReaderWebUiAuthorModule,
    ReaderWebUiAuthModule,
    ReaderWebUiSingleModule,
    // away be the 2nd last
    WriterWebUiAuthModule,
    // aways be the last
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      // enableTracing: true  // <-- debugging purposes only
    }),
  ],
  exports: [
    RouterModule,
    GlobalSettingsModule,
    HttpClientModule
  ],
  providers: [

  ]
})
export class ReaderWebFeatureShellModule { }

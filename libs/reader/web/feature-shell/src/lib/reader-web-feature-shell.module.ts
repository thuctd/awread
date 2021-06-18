import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GlobalSettingsModule } from '@awread/global/settings';
import { ReaderWebSharedModule, SharedDesktopLayout, SharedMobileLayout } from '@awread/reader/web/shared';
import { ReaderWebUiAuthModule } from '@awread/reader/web/ui-auth';
import { ReaderWebUiAuthorModule } from '@awread/reader/web/ui-author';
import { ReaderWebUiSingleModule } from '@awread/reader/web/ui-single';
import { ReaderWebUiMarketModule } from '@awread/reader/web/ui-market';
import { WriterWebUiAuthModule } from '@awread/writer/web/ui-auth';
import { HttpClientModule } from '@angular/common/http';
import { PlausibleService } from '@awread/global/packages';

declare const window: Window & { haveMobile: boolean };

const routes: Routes = [
  {
    path: '',
    component:
      window.innerWidth <= 768 && window?.haveMobile ? SharedMobileLayout : SharedDesktopLayout,
    children: [
      {
        path: 'not-found',
        loadChildren: () => import('@awread/global/packages').then((m) => m.NotFoundModule)
      },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    GlobalSettingsModule,
    ReaderWebSharedModule,
    ReaderWebUiAuthModule,
    ReaderWebUiSingleModule,
    ReaderWebUiMarketModule,
    WriterWebUiAuthModule,
    //WARNING: away be the 2nd last because it have to have for redirect
    ReaderWebUiAuthorModule,
    // aways be the last
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      // enableTracing: true  // <-- debugging purposes only
    }),
  ],
  exports: [RouterModule, GlobalSettingsModule, HttpClientModule],
  providers: [],
})
export class ReaderWebFeatureShellModule {
  constructor(
    private plausibleService: PlausibleService,
  ) {

  }
}

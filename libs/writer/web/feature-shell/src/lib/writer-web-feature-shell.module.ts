import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GlobalSettingsModule } from '@awread/global/settings';
import { WriterWebSharedModule, ShellDesktopLayout, ShellMobileLayout } from '@awread/writer/web/shared';
import { WriterWebUiAuthModule } from '@awread/writer/web/ui-auth';
import { WriterWebUiSingleModule } from '@awread/writer/web/ui-single';
import { WriterWebUiCreationModule } from '@awread/writer/web/ui-creation';

declare const window: Window & { haveMobile: boolean };

const routes: Routes = [
  {
    path: '',
    component:
      window.innerWidth <= 768 && window?.haveMobile ? ShellMobileLayout : ShellDesktopLayout,
    children: [
      {
        path: 'not-found',
        loadChildren: () => import('@awread/global/packages').then((m) => m.NotFoundModule)
      },
      { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    GlobalSettingsModule,
    WriterWebSharedModule,
    WriterWebUiCreationModule,
    WriterWebUiSingleModule,
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
  exports: [RouterModule, GlobalSettingsModule],
})
export class WriterWebFeatureShellModule { }

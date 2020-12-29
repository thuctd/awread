import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GlobalCoreModule } from '@awread/global/core';
import { WriterWebSharedModule, ShellDesktopLayout, ShellMobileLayout, NotFoundPage } from '@awread/writer/web/shared';
import { WriterWebUiAuthModule } from '@awread/writer/web/ui-auth';
import { WriterWebUiSingleModule } from '@awread/writer/web/ui-single';
import { WriterWebUiCreationModule } from '@awread/writer/web/ui-creation';

declare const window: Window & { haveMobile: boolean };

const routes: Routes = [
  {
    path: '',
    component:
      window.innerWidth <= 768 && window?.haveMobile
        ? ShellMobileLayout
        : ShellDesktopLayout,
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
    WriterWebSharedModule,
    WriterWebUiAuthModule,
    WriterWebUiSingleModule,
    WriterWebUiCreationModule,
  ],
  exports: [RouterModule, GlobalCoreModule],
})
export class WriterWebFeatureShellModule {
}

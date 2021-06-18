import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GlobalSettingsModule } from '@awread/global/settings';
import { ReaderPhoneSharedModule, SharedDesktopLayout, SharedMobileLayout } from '@awread/reader/phone/shared';

declare const window: Window & { haveMobile: boolean };

const routes: Routes = [
  {
    path: '',
    component: window.innerWidth <= 768 && window?.haveMobile ? SharedMobileLayout : SharedDesktopLayout,
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
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
    GlobalSettingsModule,
    ReaderPhoneSharedModule,
  ],
  exports: [RouterModule, GlobalSettingsModule],
})
export class ReaderPhoneFeatureShellModule { }

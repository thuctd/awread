import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GlobalCoreModule } from '@awread/global/core';
import { ReaderPhoneSharedModule, SharedDesktopLayout, SharedMobileLayout, NotFoundPage } from '@awread/reader/phone/shared';

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
    GlobalCoreModule,
    ReaderPhoneSharedModule,
  ],
  exports: [RouterModule, GlobalCoreModule],
})
export class ReaderPhoneFeatureShellModule { }

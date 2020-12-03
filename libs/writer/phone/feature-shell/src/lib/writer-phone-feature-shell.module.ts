import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GlobalCoreModule } from '@awread/global/core';
import {
  WriterPhoneSharedModule,
  ShellDesktopLayout,
  ShellMobileLayout,
  NotFoundPage,
} from '@awread/writer/phone/shared';

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
    WriterPhoneSharedModule,
  ],
  exports: [RouterModule, GlobalCoreModule],
})
export class WriterPhoneFeatureShellModule {}

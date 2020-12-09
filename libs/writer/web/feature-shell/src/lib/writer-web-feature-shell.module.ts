import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GlobalCoreModule } from '@awread/global/core';
import {
  WriterWebSharedModule,
  ShellDesktopLayout,
  ShellMobileLayout,
  NotFoundPage,
} from '@awread/writer/web/shared';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, faHeart, faEnvelope,faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { WriterWebUiAuthModule } from '@awread/writer/web/ui-auth';
import { WriterWebUiSingleModule } from '@awread/writer/web/ui-single';
import { WriterWebUiCreationsModule } from '@awread/writer/web/ui-creations';

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
    FontAwesomeModule,
    WriterWebSharedModule,
    WriterWebUiAuthModule,
    WriterWebUiSingleModule,
    WriterWebUiCreationsModule,
  ],
  exports: [
    RouterModule, 
    GlobalCoreModule,
    FontAwesomeModule
  ],
})
export class WriterWebFeatureShellModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCoffee, faHeart, faEnvelope,faUser, faLock);
  }
}

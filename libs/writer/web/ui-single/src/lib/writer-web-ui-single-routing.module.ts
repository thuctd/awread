import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ShellDesktopLayout,
  ShellMobileLayout,
} from '@awread/writer/web/shared';
import { SingleLayout } from './layouts/single/single.layout';

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
        path: '',
        component: SingleLayout,
        children: [
          {
            path: 'home',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/home-mobile/home-mobile.module').then(
                    (m) => m.HomeMobileModule
                  )
                : import('./pages/home-desktop/home-desktop.module').then(
                    (m) => m.HomeDesktopModule
                  ),
          },
          {
            path: 'profile',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/profile-mobile/profile-mobile.module').then(
                    (m) => m.ProfileMobileModule
                  )
                : import('./pages/profile-desktop/profile-desktop.module').then(
                    (m) => m.ProfileDesktopModule
                  ),
          },
          {
            path: 'setting',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/setting-mobile/setting-mobile.module').then(
                    (m) => m.SettingMobileModule
                  )
                : import('./pages/setting-desktop/setting-desktop.module').then(
                    (m) => m.SettingDesktopModule
                  ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriterWebUiSingleRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ShellDesktopLayout,
  ShellMobileLayout,
} from '@awread/writer/web/shared';
import { AuthLayout } from './layouts/auth/auth.layout';

declare const window: Window & { haveMobile: boolean };

const routes: Routes = [
  // {
  //   path: '',
  //   component:
  //     window.innerWidth <= 768 && window?.haveMobile
  //       ? ShellMobileLayout
  //       : ShellDesktopLayout,
  //   children: [
      {
        path: '',
        component: AuthLayout,
        children: [
          {
            path: 'login',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/login-mobile/login-mobile.module').then(
                    (m) => m.LoginMobileModule
                  )
                : import('./pages/login-desktop/login-desktop.module').then(
                    (m) => m.LoginDesktopModule
                  ),
          },
          {
            path: 'register',
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import('./pages/register-mobile/register-mobile.module').then(
                    (m) => m.RegisterMobileModule
                  )
                : import(
                    './pages/register-desktop/register-desktop.module'
                  ).then((m) => m.RegisterDesktopModule),
          },
          { path: 'forgot', loadChildren: 
  () => window.innerWidth <= 768 && window?.haveMobile ?
  import('./pages/forgot-mobile/forgot-mobile.module').then(m => m.ForgotMobileModule):
    import('./pages/forgot-desktop/forgot-desktop.module').then(m => m.ForgotDesktopModule) },
        ],
      },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriterWebUiAuthRoutingModule {}

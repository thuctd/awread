import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ShellDesktopLayout, ShellMobileLayout } from '@awread/writer/web/shared';
import { AuthLayout } from './layouts/auth/auth.layout';
import { LandingGuard } from '@awread/writer/web/ui-single';

declare const window: Window & { haveMobile: boolean };

const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        canActivate: [LandingGuard],
        loadChildren: () =>
          window.innerWidth <= 768 && window?.haveMobile
            ? import('./pages/login-register-mobile/login-register-mobile.module').then(
                (m) => m.LoginRegisterMobileModule
              )
            : import('./pages/login-register-desktop/login-register-desktop.module').then(
                (m) => m.LoginRegisterDesktopModule
              ),
      },
      {
        path: 'register',
        canActivate: [LandingGuard],
        loadChildren: () =>
          window.innerWidth <= 768 && window?.haveMobile
            ? import('./pages/login-register-mobile/login-register-mobile.module').then(
                (m) => m.LoginRegisterMobileModule
              )
            : import('./pages/login-register-desktop/login-register-desktop.module').then(
                (m) => m.LoginRegisterDesktopModule
              ),
      },
    ],
  },
  {
    path: 'forgot',
    loadChildren: () =>
      window.innerWidth <= 768 && window?.haveMobile
        ? import('./pages/forgot-mobile/forgot-mobile.module').then((m) => m.ForgotMobileModule)
        : import('./pages/forgot-desktop/forgot-desktop.module').then((m) => m.ForgotDesktopModule),
  },
  {
    path: 'new-password',
    loadChildren: () =>
      window.innerWidth <= 768 && window?.haveMobile
        ? import('./pages/new-password-mobile/new-password-mobile.module').then(
            (m) => m.NewPasswordMobileModule
          )
        : import('./pages/new-password-desktop/new-password-desktop.module').then(
            (m) => m.NewPasswordDesktopModule
          ),
  },
  {
    path: 'register-completed',
    loadChildren: () =>
      window.innerWidth <= 768 && window?.haveMobile
        ? import('./pages/register-complete-mobile/register-complete-mobile.module').then(
            (m) => m.RegisterCompleteMobileModule
          )
        : import('./pages/register-complete-desktop/register-complete-desktop.module').then(
            (m) => m.RegisterCompleteDesktopModule
          ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriterWebUiAuthRoutingModule {}

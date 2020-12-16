import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  ShellDesktopLayout,
  ShellMobileLayout,
} from "@awread/writer/web/shared";
import { AuthLayout } from "./layouts/auth/auth.layout";

declare const window: Window & { haveMobile: boolean };

const routes: Routes = [
  {
    path: "",
    component:
      window.innerWidth <= 768 && window?.haveMobile
        ? ShellMobileLayout
        : ShellDesktopLayout,
    children: [
      {
        path: "",
        component: AuthLayout,
        children: [
          {
            path: "signin",
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import("./pages/signin-mobile/signin-mobile.module").then(
                    (m) => m.SigninMobileModule
                  )
                : import("./pages/signin-desktop/signin-desktop.module").then(
                    (m) => m.SigninDesktopModule
                  ),
          },
          {
            path: "signup",
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import("./pages/signup-mobile/signup-mobile.module").then(
                    (m) => m.SignupMobileModule
                  )
                : import("./pages/signup-desktop/signup-desktop.module").then(
                    (m) => m.SignupDesktopModule
                  ),
          },
          {
            path: "forgot",
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import("./pages/forgot-mobile/forgot-mobile.module").then(
                    (m) => m.ForgotMobileModule
                  )
                : import("./pages/forgot-desktop/forgot-desktop.module").then(
                    (m) => m.ForgotDesktopModule
                  ),
          },
          {
            path: "login-register",
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import(
                    "./pages/login-register-mobile/login-register-mobile.module"
                  ).then((m) => m.LoginRegisterMobileModule)
                : import(
                    "./pages/login-register-desktop/login-register-desktop.module"
                  ).then((m) => m.LoginRegisterDesktopModule),
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
export class WriterWebUiAuthRoutingModule {}

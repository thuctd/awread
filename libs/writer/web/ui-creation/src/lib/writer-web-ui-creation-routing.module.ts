import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  ShellDesktopLayout,
  ShellMobileLayout,
} from "@awread/writer/web/shared";
import { CreationLayout } from "./layouts/creation/creation.layout";

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
        component: CreationLayout,
        children: [
          {
            path: "list",
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import("./pages/list-mobile/list-mobile.module").then(
                    (m) => m.ListMobileModule
                  )
                : import("./pages/list-desktop/list-desktop.module").then(
                    (m) => m.ListDesktopModule
                  ),
          },
          {
            path: "detail",
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import("./pages/detail-mobile/detail-mobile.module").then(
                    (m) => m.DetailMobileModule
                  )
                : import("./pages/detail-desktop/detail-desktop.module").then(
                    (m) => m.DetailDesktopModule
                  ),
          },
          {
            path: "writing",
            loadChildren: () =>
              window.innerWidth <= 768 && window?.haveMobile
                ? import("./pages/writing-mobile/writing-mobile.module").then(
                    (m) => m.WritingMobileModule
                  )
                : import("./pages/writing-desktop/writing-desktop.module").then(
                    (m) => m.WritingDesktopModule
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
export class WriterWebUiCreationRoutingModule {}

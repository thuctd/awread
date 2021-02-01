import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalDesignSystemAtomicModule, StorybookSupportModule } from '@awread/global/design-system';
import { NavbarLinkGroupMolec } from "./molecs/navbar-link-group/navbar-link-group.molec";
import { TopNavOrgan } from "./organs/top-nav/top-nav.organ";
import { RightTopnavMolec } from "./molecs/right-topnav/right-topnav.molec";
import { LeftNavOrgan } from "./organs/left-nav/left-nav.organ";
import { GroupIconNavleftMolec } from "./molecs/group-icon-navleft/group-icon-navleft.molec";
import { NavbarTemplate } from "./templates/navbar/navbar.template";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    StorybookSupportModule,
    GlobalDesignSystemAtomicModule,
  ],
  exports: [
    RouterModule,
    CommonModule,
    NavbarLinkGroupMolec,
    TopNavOrgan,
    RightTopnavMolec,
    LeftNavOrgan,
    GroupIconNavleftMolec,
    NavbarTemplate,
  ],
  declarations: [
    NavbarLinkGroupMolec,
    TopNavOrgan,
    RightTopnavMolec,
    LeftNavOrgan,
    GroupIconNavleftMolec,
    NavbarTemplate,
  ],
})
export class WriterWebSharedAtomicModule { }

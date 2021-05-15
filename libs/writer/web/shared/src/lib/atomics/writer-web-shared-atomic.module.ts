import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalDesignSystemAtomicModule, StorybookSupportModule } from '@awread/global/design-system';
import { WrtNavtopOrgan } from './organs/wrt-navtop/wrt-navtop.organ';
import { WrtTopnavRightMolec } from './molecs/wrt-topnav-right/wrt-topnav-right.molec';
import { WrtNavleftOrgan } from './organs/wrt-navleft/wrt-navleft.organ';
import { WrtNavleftGroupIconMolec } from './molecs/wrt-navleft-group-icon/wrt-navleft-group-icon.molec';
import { WrtNavbarTemplate } from './templates/wrt-navbar/wrt-navbar.template';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule],
  exports: [RouterModule, CommonModule, WrtNavtopOrgan, WrtTopnavRightMolec, WrtNavleftOrgan, WrtNavleftGroupIconMolec, WrtNavbarTemplate],
  declarations: [WrtNavtopOrgan, WrtTopnavRightMolec, WrtNavleftOrgan, WrtNavleftGroupIconMolec, WrtNavbarTemplate],
})
export class WriterWebSharedAtomicModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalDesignSystemAtomicModule, StorybookSupportModule } from '@awread/global/design-system';
import { WrtNavtopOrgan } from './organs/wrt-navtop/wrt-navtop.organ';
import { WrtTopnavRightMolec } from './molecs/wrt-topnav-right/wrt-topnav-right.molec';
import { WrtNavleftOrgan } from './organs/wrt-navleft/wrt-navleft.organ';
import { WrtNavleftGroupIconMolec } from './molecs/wrt-navleft-group-icon/wrt-navleft-group-icon.molec';
import { WrtNavbarTemplate } from './templates/wrt-navbar/wrt-navbar.template';
import { RouterModule } from '@angular/router';
import { PopupCoverImageTemplate } from './templates/popup-cover-image/popup-cover-image.template';
import { PopupCoverImageChooseOrgan } from './organs/popup-cover-image-choose/popup-cover-image-choose.organ';
import { PopupCoverImageAlignOrgan } from './organs/popup-cover-image-align/popup-cover-image-align.organ';

@NgModule({
  imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule],
  exports: [
    RouterModule,
    CommonModule,
    WrtNavtopOrgan,
    WrtTopnavRightMolec,
    WrtNavleftOrgan,
    WrtNavleftGroupIconMolec,
    WrtNavbarTemplate,
    PopupCoverImageTemplate,
    PopupCoverImageChooseOrgan,
    PopupCoverImageAlignOrgan,
  ],
  declarations: [
    WrtNavtopOrgan,
    WrtTopnavRightMolec,
    WrtNavleftOrgan,
    WrtNavleftGroupIconMolec,
    WrtNavbarTemplate,
    PopupCoverImageTemplate,
    PopupCoverImageChooseOrgan,
    PopupCoverImageAlignOrgan,
  ],
})
export class WriterWebSharedAtomicModule {}

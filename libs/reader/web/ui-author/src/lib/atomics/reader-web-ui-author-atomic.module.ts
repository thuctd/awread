import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalDesignSystemAtomicModule, StorybookSupportModule } from '@awread/global/design-system';
import { RdAuthorDetailMolec } from './molecs/rd-author-detail/rd-author-detail.molec';
import { RdAuthorMainOrgan } from './organs/rd-author-main/rd-author-main.organ';
import { RdAuthorProductOrgan } from './organs/rd-author-product/rd-author-product.organ';
import { RdAuthorTemplate } from './templates/rd-author/rd-author.template';
import { RdAuthorListProductOrgan } from './organs/rd-author-list-product/rd-author-list-product.organ';
import { RdAuthorMenuMolec } from './molecs/rd-author-menu/rd-author-menu.molec';
import { RdAuthorAvatarItemGridMolec } from './molecs/rd-author-avatar-item-grid/rd-author-avatar-item-grid.molec';
import { RdAuthorListBtnsMolec } from './molecs/rd-author-list-btns/rd-author-list-btns.molec';
import { RdAuthorInfoBookItemMolec } from './molecs/rd-author-info-book-item/rd-author-info-book-item.molec';
import { RdAuthorBookGridMolec } from './molecs/rd-author-book-grid/rd-author-book-grid.molec';
import { RdAuthorBreadcrumbMolec } from './molecs/rd-author-breadcrumb/rd-author-breadcrumb.molec';
import { RdAuthorProductTemplate } from './templates/rd-author-product/rd-author-product.template';
import { RdAuthorPopupUnfollowTemplate } from './templates/rd-author-popup-unfollow/rd-author-popup-unfollow.template';
import { RdAuthorPopupBlockTemplate } from './templates/rd-author-popup-block/rd-author-popup-block.template';
import { RdAuthorPopupListFollowersTemplate } from './templates/rd-author-popup-list-followers/rd-author-popup-list-followers.template';
import { RdAuthorFollowersMolec } from './molecs/rd-author-followers/rd-author-followers.molec';
import { RdAuthorListFollowersOrgan } from './organs/rd-author-list-followers/rd-author-list-followers.organ';
import { RdAuthorContentPopupUnfollowOrgan } from './organs/rd-author-content-popup-unfollow/rd-author-content-popup-unfollow.organ';
import { RdAuthorPopupUnblockTemplate } from './templates/rd-author-popup-unblock/rd-author-popup-unblock.template';
import { RdAuthorPopupReportTemplate } from './templates/rd-author-popup-report/rd-author-popup-report.template';
import { RdAuthorPopupNotiReportTemplate } from './templates/rd-author-popup-noti-report/rd-author-popup-noti-report.template';
import { RdAuthorListReportOrgan } from './organs/rd-author-list-report/rd-author-list-report.organ';
import { RdAuthorContentPopupNotiReportOrgan } from './organs/rd-author-content-popup-noti-report/rd-author-content-popup-noti-report.organ';
import { RdAuthorContentPopupBlockOrgan } from './organs/rd-author-content-popup-block/rd-author-content-popup-block.organ';

@NgModule({
  declarations: [
    RdAuthorDetailMolec,
    RdAuthorMainOrgan,
    RdAuthorProductOrgan,
    RdAuthorTemplate,
    RdAuthorListProductOrgan,
    RdAuthorMenuMolec,
    RdAuthorAvatarItemGridMolec,
    RdAuthorListBtnsMolec,
    RdAuthorInfoBookItemMolec,
    RdAuthorBookGridMolec,
    RdAuthorBreadcrumbMolec,
    RdAuthorProductTemplate,
    RdAuthorPopupUnfollowTemplate,
    RdAuthorPopupBlockTemplate,
    RdAuthorPopupListFollowersTemplate,
    RdAuthorFollowersMolec,
    RdAuthorListFollowersOrgan,
    RdAuthorContentPopupUnfollowOrgan,
    RdAuthorPopupUnblockTemplate,
    RdAuthorPopupReportTemplate,
    RdAuthorPopupNotiReportTemplate,
    RdAuthorListReportOrgan,
    RdAuthorContentPopupNotiReportOrgan,
    RdAuthorContentPopupBlockOrgan,
  ],
  imports: [CommonModule, GlobalDesignSystemAtomicModule, StorybookSupportModule],
  exports: [
    RdAuthorDetailMolec,
    RdAuthorMainOrgan,
    RdAuthorProductOrgan,
    RdAuthorTemplate,
    RdAuthorListProductOrgan,
    RdAuthorMenuMolec,
    RdAuthorAvatarItemGridMolec,
    RdAuthorListBtnsMolec,
    RdAuthorInfoBookItemMolec,
    RdAuthorBookGridMolec,
    RdAuthorBreadcrumbMolec,
    RdAuthorProductTemplate,
    RdAuthorPopupUnfollowTemplate,
    RdAuthorPopupBlockTemplate,
    RdAuthorPopupListFollowersTemplate,
    RdAuthorFollowersMolec,
    RdAuthorListFollowersOrgan,
    RdAuthorContentPopupUnfollowOrgan,
    RdAuthorPopupUnblockTemplate,
    RdAuthorPopupReportTemplate,
    RdAuthorPopupNotiReportTemplate,
    RdAuthorListReportOrgan,
    RdAuthorContentPopupNotiReportOrgan,
    RdAuthorContentPopupBlockOrgan,
  ],
})
export class ReaderWebUiAuthorAtomicModule {}

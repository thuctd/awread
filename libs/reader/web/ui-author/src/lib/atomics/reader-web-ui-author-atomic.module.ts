import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalDesignSystemAtomicModule, StorybookSupportModule } from '@awread/global/design-system';
import { ReaderWebSharedAtomicModule } from '@awread/reader/web/shared';
import { RdAuthorDetailMolec } from './molecs/rd-author-detail/rd-author-detail.molec';
import { RdAuthorMainOrgan } from './organs/rd-author-main/rd-author-main.organ';
import { RdAuthorProductOrgan } from './organs/rd-author-product/rd-author-product.organ';
import { RdAuthorTemplate } from './templates/rd-author/rd-author.template';
import { RdAuthorListProductOrgan } from './organs/rd-author-list-product/rd-author-list-product.organ';
import { RdAuthorMenuMolec } from './molecs/rd-author-menu/rd-author-menu.molec';
import { RdAuthorAvatarItemGridMolec } from './molecs/rd-author-avatar-item-grid/rd-author-avatar-item-grid.molec';
import { RdAuthorListBtnsMolec } from './molecs/rd-author-list-btns/rd-author-list-btns.molec';
import { RdAuthorBookItemInfoMolec } from './molecs/rd-author-book-item-info/rd-author-book-item-info.molec';
import { RdAuthorBookItemMolec } from './molecs/rd-author-book-item/rd-author-book-item.molec';
import { RdAuthorProductTemplate } from './templates/rd-author-product/rd-author-product.template';
import { RdAuthorPopupUnfollowTemplate } from './templates/rd-author-popup-unfollow/rd-author-popup-unfollow.template';
import { RdAuthorPopupBlockTemplate } from './templates/rd-author-popup-block/rd-author-popup-block.template';
import { RdAuthorPopupListFollowersTemplate } from './templates/rd-author-popup-list-followers/rd-author-popup-list-followers.template';
import { RdAuthorFollowerItemMolec } from './molecs/rd-author-follower-item/rd-author-follower-item.molec';
import { RdAuthorListFollowersOrgan } from './organs/rd-author-list-followers/rd-author-list-followers.organ';
import { RdAuthorPopupUnblockTemplate } from './templates/rd-author-popup-unblock/rd-author-popup-unblock.template';
import { RdAuthorPopupReportTemplate } from './templates/rd-author-popup-report/rd-author-popup-report.template';
import { RdAuthorPopupNotiReportTemplate } from './templates/rd-author-popup-noti-report/rd-author-popup-noti-report.template';
import { RdAuthorListReportOrgan } from './organs/rd-author-list-report/rd-author-list-report.organ';
import { RdAuthorContentPopupNotiReportOrgan } from './organs/rd-author-content-popup-noti-report/rd-author-content-popup-noti-report.organ';
import { RdAuthorContentPopupBlockOrgan } from './organs/rd-author-content-popup-block/rd-author-content-popup-block.organ';
import { RdAuthorTabsMolec } from './molecs/rd-author-tabs/rd-author-tabs.molec';
import { RdAuthorMainMbOrgan } from './organs/rd-author-main-mb/rd-author-main-mb.organ';
import { RdAuthorAvatarItemListMbMolec } from './molecs/rd-author-avatar-item-list-mb/rd-author-avatar-item-list-mb.molec';
import { RdAuthorListBtnsMbMolec } from './molecs/rd-author-list-btns-mb/rd-author-list-btns-mb.molec';
import { RdAuthorPopupReportMbTemplate } from './templates/rd-author-popup-report-mb/rd-author-popup-report-mb.template';
import { RdAuthorTabPageMbOrgan } from './organs/rd-author-tab-page-mb/rd-author-tab-page-mb.organ';
import { RdAuthorListProductMbMolec } from './molecs/rd-author-list-product-mb/rd-author-list-product-mb.molec';
import { RdAuthorMbTemplate } from './templates/rd-author-mb/rd-author-mb.template';
import { RdAuthorPopupMbMolec } from './molecs/rd-author-popup-mb/rd-author-popup-mb.molec';
import { RdAuthorPopupMenuMbTemplate } from './templates/rd-author-popup-menu-mb/rd-author-popup-menu-mb.template';
import { RdAuthorPopupBlockMbTemplate } from './templates/rd-author-popup-block-mb/rd-author-popup-block-mb.template';
import { RdAuthorPopupUnblockMbTemplate } from './templates/rd-author-popup-unblock-mb/rd-author-popup-unblock-mb.template';
import { RdAuthorPopupListFollowersMbTemplate } from './templates/rd-author-popup-list-followers-mb/rd-author-popup-list-followers-mb.template';
import { RdAuthorPopupNotiReportMbTemplate } from './templates/rd-author-popup-noti-report-mb/rd-author-popup-noti-report-mb.template';
import { RdAuthorPopupUnfollowMbTemplate } from './templates/rd-author-popup-unfollow-mb/rd-author-popup-unfollow-mb.template';
import { RdAuthorProductMbTemplate } from './templates/rd-author-product-mb/rd-author-product-mb.template';

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
    RdAuthorBookItemInfoMolec,
    RdAuthorBookItemMolec,
    RdAuthorProductTemplate,
    RdAuthorPopupUnfollowTemplate,
    RdAuthorPopupBlockTemplate,
    RdAuthorPopupListFollowersTemplate,
    RdAuthorFollowerItemMolec,
    RdAuthorListFollowersOrgan,
    RdAuthorPopupUnblockTemplate,
    RdAuthorPopupReportTemplate,
    RdAuthorPopupNotiReportTemplate,
    RdAuthorListReportOrgan,
    RdAuthorContentPopupNotiReportOrgan,
    RdAuthorContentPopupBlockOrgan,
    RdAuthorTabsMolec,
    RdAuthorMainMbOrgan,
    RdAuthorAvatarItemListMbMolec,
    RdAuthorListBtnsMbMolec,
    RdAuthorPopupReportMbTemplate,
    RdAuthorTabPageMbOrgan,
    RdAuthorListProductMbMolec,
    RdAuthorMbTemplate,
    RdAuthorPopupMbMolec,
    RdAuthorPopupMenuMbTemplate,
    RdAuthorPopupBlockMbTemplate,
    RdAuthorPopupUnblockMbTemplate,
    RdAuthorPopupListFollowersMbTemplate,
    RdAuthorPopupNotiReportMbTemplate,
    RdAuthorPopupUnfollowMbTemplate,
    RdAuthorProductMbTemplate,
  ],
  imports: [CommonModule, GlobalDesignSystemAtomicModule, StorybookSupportModule, ReaderWebSharedAtomicModule],
  exports: [
    ReaderWebSharedAtomicModule,
    RdAuthorDetailMolec,
    RdAuthorMainOrgan,
    RdAuthorProductOrgan,
    RdAuthorTemplate,
    RdAuthorListProductOrgan,
    RdAuthorMenuMolec,
    RdAuthorAvatarItemGridMolec,
    RdAuthorListBtnsMolec,
    RdAuthorBookItemInfoMolec,
    RdAuthorBookItemMolec,
    RdAuthorProductTemplate,
    RdAuthorPopupUnfollowTemplate,
    RdAuthorPopupBlockTemplate,
    RdAuthorPopupListFollowersTemplate,
    RdAuthorFollowerItemMolec,
    RdAuthorListFollowersOrgan,
    RdAuthorPopupUnblockTemplate,
    RdAuthorPopupReportTemplate,
    RdAuthorPopupNotiReportTemplate,
    RdAuthorListReportOrgan,
    RdAuthorContentPopupNotiReportOrgan,
    RdAuthorContentPopupBlockOrgan,
    RdAuthorTabsMolec,
    RdAuthorMainMbOrgan,
    RdAuthorAvatarItemListMbMolec,
    RdAuthorListBtnsMbMolec,
    RdAuthorPopupReportMbTemplate,
    RdAuthorTabPageMbOrgan,
    RdAuthorListProductMbMolec,
    RdAuthorMbTemplate,
    RdAuthorPopupMbMolec,
    RdAuthorPopupMenuMbTemplate,
    RdAuthorPopupBlockMbTemplate,
    RdAuthorPopupUnblockMbTemplate,
    RdAuthorPopupListFollowersMbTemplate,
    RdAuthorPopupNotiReportMbTemplate,
    RdAuthorPopupUnfollowMbTemplate,
    RdAuthorProductMbTemplate,
  ],
})
export class ReaderWebUiAuthorAtomicModule {}

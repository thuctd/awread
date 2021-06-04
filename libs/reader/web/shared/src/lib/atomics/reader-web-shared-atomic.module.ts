import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdDropdownMenuMolec } from './molecs/rd-dropdown-menu/rd-dropdown-menu.molec';
import { GlobalDesignSystemAtomicModule, StorybookSupportModule } from '@awread/global/design-system';
import { RdDropdownMenuItemMolec } from './molecs/rd-dropdown-menu-item/rd-dropdown-menu-item.molec';
import { NavbarMenuOrgan } from './organs/navbar-menu/navbar-menu.organ';
import { NavbarAuthBtnsMolec } from './molecs/navbar-auth-btns/navbar-auth-btns.molec';
import { NavbarReaderTemplate } from './templates/navbar-reader/navbar-reader.template';
import { NavbarDesktopOrgan } from './organs/navbar-desktop/navbar-desktop.organ';
import { NavbarAuthLoggedMolec } from './molecs/navbar-auth-logged/navbar-auth-logged.molec';
import { NavbarAuthDropdownMolec } from './molecs/navbar-auth-dropdown/navbar-auth-dropdown.molec';
import { NavbarButtonsOrgan } from './organs/navbar-buttons/navbar-buttons.organ';
import { DownloadAppMolec } from './molecs/download-app/download-app.molec';
import { LinkAppOrgan } from './organs/link-app/link-app.organ';
import { InformationAppOrgan } from './organs/information-app/information-app.organ';
import { FooterTemplate } from './templates/footer/footer.template';
import { NavbarMbOrgan } from './organs/navbar-mb/navbar-mb.organ';
import { RdNavbarMbTemplate } from './templates/rd-navbar-mb/rd-navbar-mb.template';
import { RdNavbarNotiMenuMolec } from './molecs/rd-navbar-noti-menu/rd-navbar-noti-menu.molec';
import { RdListBtnsMenuMbMolec } from './molecs/rd-list-btns-menu-mb/rd-list-btns-menu-mb.molec';
import { RdHeadMenuMbMolec } from './molecs/rd-head-menu-mb/rd-head-menu-mb.molec';
import { RdMenuMbMolec } from './molecs/rd-menu-mb/rd-menu-mb.molec';
import { RdContentMenuMbMolec } from './molecs/rd-content-menu-mb/rd-content-menu-mb.molec';

@NgModule({
  declarations: [
    RdDropdownMenuMolec,
    RdDropdownMenuItemMolec,
    NavbarMenuOrgan,
    NavbarAuthBtnsMolec,
    NavbarReaderTemplate,
    NavbarDesktopOrgan,
    NavbarAuthLoggedMolec,
    NavbarAuthDropdownMolec,
    NavbarButtonsOrgan,
    DownloadAppMolec,
    LinkAppOrgan,
    InformationAppOrgan,
    FooterTemplate,
    NavbarMbOrgan,
    RdNavbarMbTemplate,
    RdNavbarNotiMenuMolec,
    RdListBtnsMenuMbMolec,
    RdHeadMenuMbMolec,
    RdMenuMbMolec,
    RdContentMenuMbMolec,
  ],
  imports: [CommonModule, GlobalDesignSystemAtomicModule, StorybookSupportModule],
  exports: [
    RdDropdownMenuMolec,
    RdDropdownMenuItemMolec,
    NavbarMenuOrgan,
    NavbarAuthBtnsMolec,
    NavbarReaderTemplate,
    NavbarDesktopOrgan,
    NavbarAuthLoggedMolec,
    NavbarAuthDropdownMolec,
    NavbarButtonsOrgan,
    DownloadAppMolec,
    LinkAppOrgan,
    InformationAppOrgan,
    FooterTemplate,
    NavbarMbOrgan,
    RdNavbarMbTemplate,
    RdNavbarNotiMenuMolec,
    RdListBtnsMenuMbMolec,
    RdHeadMenuMbMolec,
    RdMenuMbMolec,
    RdContentMenuMbMolec,
  ],
})
export class ReaderWebSharedAtomicModule {}

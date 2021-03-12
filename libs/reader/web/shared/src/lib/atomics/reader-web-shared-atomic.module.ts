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
import { InfoMolec } from './molecs/info/info.molec';
import { FooterTemplate } from './templates/footer/footer.template';
import { DropdownMenuMbMolec } from './molecs/dropdown-menu-mb/dropdown-menu-mb.molec';
import { MenuNavbarMolec } from './molecs/menu-navbar/menu-navbar.molec';
import { NavbarMbOrgan } from './organs/navbar-mb/navbar-mb.organ';
import { SearchNavbarMolec } from './molecs/search-navbar/search-navbar.molec';
import { GroupIconNavbarOrgan } from './organs/group-icon-navbar/group-icon-navbar.organ';
import { RdNavbarMbTemplate } from './templates/rd-navbar-mb/rd-navbar-mb.template';
import { RdNavbarNotiMenuMolec } from './molecs/rd-navbar-noti-menu/rd-navbar-noti-menu.molec';

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
    InfoMolec,
    FooterTemplate,
    DropdownMenuMbMolec,
    MenuNavbarMolec,
    NavbarMbOrgan,
    SearchNavbarMolec,
    GroupIconNavbarOrgan,
    RdNavbarMbTemplate,
    RdNavbarNotiMenuMolec,
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
    InfoMolec,
    FooterTemplate,
    DropdownMenuMbMolec,
    MenuNavbarMolec,
    NavbarMbOrgan,
    SearchNavbarMolec,
    GroupIconNavbarOrgan,
    RdNavbarMbTemplate,
    RdNavbarNotiMenuMolec,
  ],
})
export class ReaderWebSharedAtomicModule {}

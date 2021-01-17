import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdDropdownMenuMolec } from './molecs/rd-dropdown-menu/rd-dropdown-menu.molec';
import {
  GlobalDesignSystemAtomicModule,
  StorybookSupportModule,
} from '@awread/global/design-system';
import { RdDropdownMenuItemMolec } from './molecs/rd-dropdown-menu-item/rd-dropdown-menu-item.molec';
import { NavbarMenuOrgan } from './organs/navbar-menu/navbar-menu.organ';
import { NavbarAuthBtnsMolec } from './molecs/navbar-auth-btns/navbar-auth-btns.molec';
import { NavbarReaderTemplate } from './templates/navbar-reader/navbar-reader.template';
import { NavbarDesktopOrgan } from './organs/navbar-desktop/navbar-desktop.organ';
import { NavbarAuthLoggedMolec } from './molecs/navbar-auth-logged/navbar-auth-logged.molec';


@NgModule({
  declarations: [
    RdDropdownMenuMolec, RdDropdownMenuItemMolec, NavbarMenuOrgan, NavbarAuthBtnsMolec, NavbarReaderTemplate, NavbarDesktopOrgan, NavbarAuthLoggedMolec],
  imports: [
    CommonModule,
    GlobalDesignSystemAtomicModule,
    StorybookSupportModule
  ],
  exports: [RdDropdownMenuMolec, RdDropdownMenuItemMolec, NavbarMenuOrgan, NavbarAuthBtnsMolec, NavbarReaderTemplate, NavbarDesktopOrgan, NavbarAuthLoggedMolec]
})
export class ReaderWebSharedAtomicModule { }

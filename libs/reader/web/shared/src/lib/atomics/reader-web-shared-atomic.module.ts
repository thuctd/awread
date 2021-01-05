import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdDropdownMenuMolec } from './molecs/rd-dropdown-menu/rd-dropdown-menu.molec';
import {
  GlobalDesignSystemAtomicModule,
  StorybookSupportModule,
} from "@awread/global/design-system";
import { RdDropdownMenuItemMolec } from './molecs/rd-dropdown-menu-item/rd-dropdown-menu-item.molec';
import { NavbarMenuOrgan } from './organs/navbar-menu/navbar-menu.organ';


@NgModule({
  declarations: [RdDropdownMenuMolec, RdDropdownMenuItemMolec, NavbarMenuOrgan],
  imports: [
    CommonModule,
    GlobalDesignSystemAtomicModule
  ],
  exports: [RdDropdownMenuMolec, RdDropdownMenuItemMolec, NavbarMenuOrgan]
})
export class ReaderWebSharedAtomicModule { }

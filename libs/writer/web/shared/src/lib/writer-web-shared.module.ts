import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellDesktopLayout } from './layouts/shell-desktop/shell-desktop.layout';
import { ShellMobileLayout } from './layouts/shell-mobile/shell-mobile.layout';
import { NavbarPart } from './parts/navbar/navbar.part';
import { HeaderPart } from './parts/header/header.part';
import { FooterPart } from './parts/footer/footer.part';

@NgModule({
  imports: [CommonModule],
  declarations: [ShellDesktopLayout, ShellMobileLayout, NavbarPart, HeaderPart, FooterPart],
  exports: [ShellDesktopLayout, ShellMobileLayout, NavbarPart, HeaderPart, FooterPart],
})
export class WriterWebSharedModule {}

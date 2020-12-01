import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellDesktopLayout } from './layouts/shell-desktop/shell-desktop.layout';
import { ShellMobileLayout } from './layouts/shell-mobile/shell-mobile.layout';
import { NavbarPart } from './parts/navbar/navbar.part';
import { HeaderPart } from './parts/header/header.part';
import { FooterPart } from './parts/footer/footer.part';

declare const window: Window & { haveMobile: boolean };
window.haveMobile = true;

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    RouterModule,
    ShellDesktopLayout,
    ShellMobileLayout,
    NavbarPart,
    HeaderPart,
    FooterPart,
  ],
  declarations: [
    ShellDesktopLayout,
    ShellMobileLayout,
    NavbarPart,
    HeaderPart,
    FooterPart,
  ],
})
export class WriterPhoneSharedModule {}

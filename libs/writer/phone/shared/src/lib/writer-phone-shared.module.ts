import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellDesktopLayout } from './layouts/shell-desktop/shell-desktop.layout';
import { ShellMobileLayout } from './layouts/shell-mobile/shell-mobile.layout';

declare const window: Window & { haveMobile: boolean };
window.haveMobile = true;

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    RouterModule,
    ShellDesktopLayout,
    ShellMobileLayout,
  ],
  declarations: [
    ShellDesktopLayout,
    ShellMobileLayout,
  ],
})
export class WriterPhoneSharedModule { }

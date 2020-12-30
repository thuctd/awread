import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedDesktopLayout } from './layouts/shared-desktop/shared-desktop.layout';
import { SharedMobileLayout } from './layouts/shared-mobile/shared-mobile.layout';

declare const window: Window & { haveMobile: boolean };
window.haveMobile = true;

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, SharedDesktopLayout, SharedMobileLayout],
  declarations: [SharedDesktopLayout, SharedMobileLayout],
})
export class ReaderWebSharedModule {}

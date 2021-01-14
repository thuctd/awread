import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellDesktopLayout } from './layouts/shell-desktop/shell-desktop.layout';
import { ShellMobileLayout } from './layouts/shell-mobile/shell-mobile.layout';
import { WriterWebSharedAtomicModule } from './atomics/writer-web-shared-atomic.module';
import { SnackbarsModule } from '@awread/global/packages';

declare const window: Window & { haveMobile: boolean };
window.haveMobile = false;

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WriterWebSharedAtomicModule,
    SnackbarsModule,
  ],
  exports: [
    RouterModule,
    ShellDesktopLayout,
    ShellMobileLayout,
    SnackbarsModule,
  ],
  declarations: [ShellDesktopLayout, ShellMobileLayout],
})
export class WriterWebSharedModule {}

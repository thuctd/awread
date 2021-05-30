import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellDesktopLayout } from './layouts/shell-desktop/shell-desktop.layout';
import { ShellMobileLayout } from './layouts/shell-mobile/shell-mobile.layout';
import { WriterWebSharedAtomicModule } from './atomics/writer-web-shared-atomic.module';
import { SnackbarModule } from '@awread/global/packages';


// console.log("reader-web-shared: have Mobile ?", (window as any).haveMobile);
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WriterWebSharedAtomicModule,
    SnackbarModule,
  ],
  exports: [
    RouterModule,
    ShellDesktopLayout,
    ShellMobileLayout,
    SnackbarModule,
  ],
  declarations: [ShellDesktopLayout, ShellMobileLayout],
})
export class WriterWebSharedModule { }

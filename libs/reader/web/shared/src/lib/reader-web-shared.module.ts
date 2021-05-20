import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedDesktopLayout } from './layouts/shared-desktop/shared-desktop.layout';
import { SharedMobileLayout } from './layouts/shared-mobile/shared-mobile.layout';
import { ReaderWebSharedAtomicModule } from './atomics/reader-web-shared-atomic.module';


// console.log("reader-web-shared: have Mobile ?", (window as any).haveMobile);
@NgModule({
  imports: [CommonModule, RouterModule, ReaderWebSharedAtomicModule],
  exports: [RouterModule, SharedDesktopLayout, SharedMobileLayout],
  declarations: [SharedDesktopLayout, SharedMobileLayout],
})
export class ReaderWebSharedModule { }

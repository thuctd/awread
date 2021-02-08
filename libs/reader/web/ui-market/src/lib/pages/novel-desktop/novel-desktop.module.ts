import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovelDesktopRoutingModule } from './novel-desktop-routing.module';
import { NovelDesktopPage } from './novel-desktop.page';


@NgModule({
  declarations: [NovelDesktopPage],
  imports: [
    CommonModule,
    NovelDesktopRoutingModule
  ]
})
export class NovelDesktopModule { }

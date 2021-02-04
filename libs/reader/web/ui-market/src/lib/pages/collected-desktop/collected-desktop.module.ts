import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectedDesktopRoutingModule } from './collected-desktop-routing.module';
import { CollectedDesktopPage } from './collected-desktop.page';


@NgModule({
  declarations: [CollectedDesktopPage],
  imports: [
    CommonModule,
    CollectedDesktopRoutingModule
  ]
})
export class CollectedDesktopModule { }

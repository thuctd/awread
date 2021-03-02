import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailDesktopRoutingModule } from './detail-desktop-routing.module';
import { DetailDesktopPage } from './detail-desktop.page';


@NgModule({
  declarations: [DetailDesktopPage],
  imports: [
    CommonModule,
    DetailDesktopRoutingModule
  ]
})
export class DetailDesktopModule { }

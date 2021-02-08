import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComposedDesktopRoutingModule } from './composed-desktop-routing.module';
import { ComposedDesktopPage } from './composed-desktop.page';


@NgModule({
  declarations: [ComposedDesktopPage],
  imports: [
    CommonModule,
    ComposedDesktopRoutingModule
  ]
})
export class ComposedDesktopModule { }

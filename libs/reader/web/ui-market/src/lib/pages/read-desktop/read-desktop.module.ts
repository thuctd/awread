import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadDesktopRoutingModule } from './read-desktop-routing.module';
import { ReadDesktopPage } from './read-desktop.page';


@NgModule({
  declarations: [ReadDesktopPage],
  imports: [
    CommonModule,
    ReadDesktopRoutingModule
  ]
})
export class ReadDesktopModule { }

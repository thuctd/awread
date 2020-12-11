import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDesktopRoutingModule } from './home-desktop-routing.module';
import { HomeDesktopPage } from './home-desktop.page';

@NgModule({
  declarations: [HomeDesktopPage],
  imports: [CommonModule, HomeDesktopRoutingModule],
})
export class HomeDesktopModule {}

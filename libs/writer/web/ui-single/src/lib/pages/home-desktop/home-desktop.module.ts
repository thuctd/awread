import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDesktopRoutingModule } from './home-desktop-routing.module';
import { HomeDesktopPage } from './home-desktop.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [HomeDesktopPage,],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTabsModule,
    HomeDesktopRoutingModule,
  ],
})
export class HomeDesktopModule {}

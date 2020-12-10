import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDesktopRoutingModule } from './profile-desktop-routing.module';
import { ProfileDesktopPage } from './profile-desktop.page';

@NgModule({
  declarations: [ProfileDesktopPage],
  imports: [CommonModule, ProfileDesktopRoutingModule],
})
export class ProfileDesktopModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDesktopRoutingModule } from './profile-desktop-routing.module';
import { ProfileDesktopPage } from './profile-desktop.page';
import { FormProfileSection } from './sections/form-profile/form-profile.section';
import { ImageProfileSection } from './sections/image-profile/image-profile.section';

@NgModule({
  declarations: [ProfileDesktopPage, FormProfileSection, ImageProfileSection],
  imports: [CommonModule, ProfileDesktopRoutingModule],
})
export class ProfileDesktopModule {}

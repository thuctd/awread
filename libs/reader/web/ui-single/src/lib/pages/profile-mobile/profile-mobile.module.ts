import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileMobileRoutingModule } from './profile-mobile-routing.module';
import { ProfileMobilePage } from './profile-mobile.page';


@NgModule({
  declarations: [ProfileMobilePage],
  imports: [
    CommonModule,
    ProfileMobileRoutingModule
  ]
})
export class ProfileMobileModule { }

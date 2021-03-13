import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityMobileRoutingModule } from './community-mobile-routing.module';
import { CommunityMobilePage } from './community-mobile.page';


@NgModule({
  declarations: [CommunityMobilePage],
  imports: [
    CommonModule,
    CommunityMobileRoutingModule
  ]
})
export class CommunityMobileModule { }

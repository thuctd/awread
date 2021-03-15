import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityDesktopRoutingModule } from './community-desktop-routing.module';
import { CommunityDesktopPage } from './community-desktop.page';


@NgModule({
  declarations: [CommunityDesktopPage],
  imports: [
    CommonModule,
    CommunityDesktopRoutingModule
  ]
})
export class CommunityDesktopModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMobileRoutingModule } from './home-mobile-routing.module';
import { HomeMobilePage } from './home-mobile.page';

@NgModule({
  declarations: [HomeMobilePage],
  imports: [CommonModule, HomeMobileRoutingModule],
})
export class HomeMobileModule {}

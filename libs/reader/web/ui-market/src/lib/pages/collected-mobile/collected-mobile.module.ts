import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectedMobileRoutingModule } from './collected-mobile-routing.module';
import { CollectedMobilePage } from './collected-mobile.page';


@NgModule({
  declarations: [CollectedMobilePage],
  imports: [
    CommonModule,
    CollectedMobileRoutingModule
  ]
})
export class CollectedMobileModule { }

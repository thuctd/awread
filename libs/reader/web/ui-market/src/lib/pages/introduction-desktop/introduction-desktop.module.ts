import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionDesktopRoutingModule } from './introduction-desktop-routing.module';
import { IntroductionDesktopPage } from './introduction-desktop.page';


@NgModule({
  declarations: [IntroductionDesktopPage],
  imports: [
    CommonModule,
    IntroductionDesktopRoutingModule
  ]
})
export class IntroductionDesktopModule { }

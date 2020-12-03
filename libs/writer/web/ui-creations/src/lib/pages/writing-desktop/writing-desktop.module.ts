import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WritingDesktopRoutingModule } from './writing-desktop-routing.module';
import { WritingDesktopPage } from './writing-desktop.page';

@NgModule({
  declarations: [WritingDesktopPage],
  imports: [CommonModule, WritingDesktopRoutingModule],
})
export class WritingDesktopModule {}

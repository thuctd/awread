import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LongStoryDesktopRoutingModule } from './long-story-desktop-routing.module';
import { LongStoryDesktopPage } from './long-story-desktop.page';


@NgModule({
  declarations: [LongStoryDesktopPage],
  imports: [
    CommonModule,
    LongStoryDesktopRoutingModule
  ]
})
export class LongStoryDesktopModule { }

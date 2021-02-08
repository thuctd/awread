import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortStoryDesktopRoutingModule } from './short-story-desktop-routing.module';
import { ShortStoryDesktopPage } from './short-story-desktop.page';


@NgModule({
  declarations: [ShortStoryDesktopPage],
  imports: [
    CommonModule,
    ShortStoryDesktopRoutingModule
  ]
})
export class ShortStoryDesktopModule { }

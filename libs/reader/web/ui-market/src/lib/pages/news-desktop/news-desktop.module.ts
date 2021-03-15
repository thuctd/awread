import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsDesktopRoutingModule } from './news-desktop-routing.module';
import { NewsDesktopPage } from './news-desktop.page';


@NgModule({
  declarations: [NewsDesktopPage],
  imports: [
    CommonModule,
    NewsDesktopRoutingModule
  ]
})
export class NewsDesktopModule { }

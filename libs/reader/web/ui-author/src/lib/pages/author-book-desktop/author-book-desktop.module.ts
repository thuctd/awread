import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorBookDesktopRoutingModule } from './author-book-desktop-routing.module';
import { AuthorBookDesktopPage } from './author-book-desktop.page';


@NgModule({
  declarations: [AuthorBookDesktopPage],
  imports: [
    CommonModule,
    AuthorBookDesktopRoutingModule
  ]
})
export class AuthorBookDesktopModule { }

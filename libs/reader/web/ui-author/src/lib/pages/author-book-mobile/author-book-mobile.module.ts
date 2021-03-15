import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorBookMobileRoutingModule } from './author-book-mobile-routing.module';
import { AuthorBookMobilePage } from './author-book-mobile.page';


@NgModule({
  declarations: [AuthorBookMobilePage],
  imports: [
    CommonModule,
    AuthorBookMobileRoutingModule
  ]
})
export class AuthorBookMobileModule { }

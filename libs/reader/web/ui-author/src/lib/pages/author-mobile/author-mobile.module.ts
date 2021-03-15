import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorMobileRoutingModule } from './author-mobile-routing.module';
import { AuthorMobilePage } from './author-mobile.page';


@NgModule({
  declarations: [AuthorMobilePage],
  imports: [
    CommonModule,
    AuthorMobileRoutingModule
  ]
})
export class AuthorMobileModule { }

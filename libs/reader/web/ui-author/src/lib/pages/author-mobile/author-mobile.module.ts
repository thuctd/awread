import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorMobileRoutingModule } from './author-mobile-routing.module';
import { AuthorMobilePage } from './author-mobile.page';
import { ReaderWebUiAuthorAtomicModule } from '../../atomics/reader-web-ui-author-atomic.module';

@NgModule({
  declarations: [AuthorMobilePage],
  imports: [CommonModule, AuthorMobileRoutingModule, ReaderWebUiAuthorAtomicModule],
})
export class AuthorMobileModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorBookMobileRoutingModule } from './author-book-mobile-routing.module';
import { AuthorBookMobilePage } from './author-book-mobile.page';
import { ReaderWebUiAuthorAtomicModule } from '../../atomics/reader-web-ui-author-atomic.module';

@NgModule({
  declarations: [AuthorBookMobilePage],
  imports: [CommonModule, AuthorBookMobileRoutingModule, ReaderWebUiAuthorAtomicModule],
})
export class AuthorBookMobileModule {}

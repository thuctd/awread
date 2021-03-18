import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorBookDesktopRoutingModule } from './author-book-desktop-routing.module';
import { AuthorBookDesktopPage } from './author-book-desktop.page';
import { ReaderWebUiAuthorAtomicModule } from '../../atomics/reader-web-ui-author-atomic.module';

@NgModule({
  declarations: [AuthorBookDesktopPage],
  imports: [CommonModule, AuthorBookDesktopRoutingModule, ReaderWebUiAuthorAtomicModule],
})
export class AuthorBookDesktopModule {}

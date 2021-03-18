import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorDesktopRoutingModule } from './author-desktop-routing.module';
import { AuthorDesktopPage } from './author-desktop.page';
import { ReaderWebUiAuthorAtomicModule } from '../../atomics/reader-web-ui-author-atomic.module';

@NgModule({
  declarations: [AuthorDesktopPage],
  imports: [CommonModule, AuthorDesktopRoutingModule, ReaderWebUiAuthorAtomicModule],
})
export class AuthorDesktopModule {}

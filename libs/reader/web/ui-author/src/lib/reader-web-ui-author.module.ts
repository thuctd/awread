import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReaderWebUiAuthorRoutingModule } from './reader-web-ui-author-routing.module';
import { AuthorLayout } from './layouts/author/author.layout';

@NgModule({
  imports: [CommonModule, ReaderWebUiAuthorRoutingModule],
  declarations: [AuthorLayout],
  exports: [AuthorLayout],
})
export class ReaderWebUiAuthorModule {}

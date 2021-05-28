import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailBookDesktopRoutingModule } from './detail-book-desktop-routing.module';
import { DetailBookDesktopPage } from './detail-book-desktop.page';
import { WriterWebUiCreationAtomicModule } from '../../atomics/writer-web-ui-creation-atomic.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DetailBookDesktopPage],
  imports: [CommonModule, DetailBookDesktopRoutingModule, WriterWebUiCreationAtomicModule, MatAutocompleteModule, MatFormFieldModule],
})
export class DetailBookDesktopModule {}

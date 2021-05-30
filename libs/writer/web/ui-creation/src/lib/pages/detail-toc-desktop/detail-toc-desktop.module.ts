import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailTocDesktopRoutingModule } from './detail-toc-desktop-routing.module';
import { DetailTocDesktopPage } from './detail-toc-desktop.page';
import { WriterWebUiCreationAtomicModule } from '../../atomics/writer-web-ui-creation-atomic.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DetailTocDesktopPage],
  imports: [CommonModule, DetailTocDesktopRoutingModule, WriterWebUiCreationAtomicModule, MatAutocompleteModule, MatFormFieldModule],
})
export class DetailTocDesktopModule {}

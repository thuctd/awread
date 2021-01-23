import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailDesktopRoutingModule } from './detail-desktop-routing.module';
import { DetailDesktopPage } from './detail-desktop.page';
import { WriterWebUiCreationAtomicModule } from '../../atomics/writer-web-ui-creation-atomic.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DetailDesktopPage],
  imports: [
    CommonModule,
    DetailDesktopRoutingModule,
    WriterWebUiCreationAtomicModule,
    MatAutocompleteModule,
    MatFormFieldModule,
  ],
})
export class DetailDesktopModule {}

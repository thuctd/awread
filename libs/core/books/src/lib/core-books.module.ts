import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverSizePipe } from './pipes/cover-size.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CoverSizePipe],
  exports: [CoverSizePipe]
})
export class CoreBooksModule { }

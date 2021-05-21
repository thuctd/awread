import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReaderWebUiSingleRoutingModule } from './reader-web-ui-single-routing.module';
import { SingleLayout } from './layouts/single/single.layout';

@NgModule({
  imports: [CommonModule, ReaderWebUiSingleRoutingModule],
  declarations: [SingleLayout],
  exports: [SingleLayout],
})
export class ReaderWebUiSingleModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterWebUiSingleRoutingModule } from './writer-web-ui-single-routing.module';
import { SingleLayout } from './layouts/single/single.layout';
import { WriterWebFeatureSingleModule } from '@awread/writer/web/feature-single';

@NgModule({
  imports: [CommonModule, WriterWebUiSingleRoutingModule, WriterWebFeatureSingleModule],
  declarations: [SingleLayout],
  exports: [SingleLayout],
})
export class WriterWebUiSingleModule {}

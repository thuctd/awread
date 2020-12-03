import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterWebUiCreationsRoutingModule } from './writer-web-ui-creations-routing.module';
import { CreationsLayout } from './layouts/creations/creations.layout';
import { WriterWebFeatureCreationsModule } from '@awread/writer/web/feature-creations';

@NgModule({
  imports: [CommonModule, WriterWebUiCreationsRoutingModule, WriterWebFeatureCreationsModule],
  declarations: [CreationsLayout],
  exports: [CreationsLayout],
})
export class WriterWebUiCreationsModule {}

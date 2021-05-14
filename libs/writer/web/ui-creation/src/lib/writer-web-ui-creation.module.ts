import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterWebUiCreationRoutingModule } from './writer-web-ui-creation-routing.module';
import { CreationLayout } from './layouts/creation/creation.layout';

@NgModule({
  imports: [CommonModule, WriterWebUiCreationRoutingModule],
  declarations: [CreationLayout],
  exports: [CreationLayout],
})
export class WriterWebUiCreationModule { }

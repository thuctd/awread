import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WriterWebUiCreationRoutingModule } from "./writer-web-ui-creation-routing.module";
import { CreationLayout } from "./layouts/creation/creation.layout";
import { WriterWebFeatureCreationModule } from '@awread/writer/web/feature-creation';

@NgModule({
  imports: [CommonModule, WriterWebUiCreationRoutingModule, WriterWebFeatureCreationModule],
  declarations: [CreationLayout],
  exports: [CreationLayout],
})
export class WriterWebUiCreationModule {}

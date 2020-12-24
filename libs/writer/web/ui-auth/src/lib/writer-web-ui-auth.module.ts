import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WriterWebUiAuthRoutingModule } from "./writer-web-ui-auth-routing.module";
import { AuthLayout } from "./layouts/auth/auth.layout";
import { WriterWebFeatureAuthModule } from "@awread/writer/web/feature-auth";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    WriterWebUiAuthRoutingModule,
    WriterWebFeatureAuthModule,
    MatDialogModule,
  ],
  declarations: [AuthLayout],
  exports: [AuthLayout],
})
export class WriterWebUiAuthModule { }

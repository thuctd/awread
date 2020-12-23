import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterWebUiAuthRoutingModule } from './writer-web-ui-auth-routing.module';
import { AuthLayout } from './layouts/auth/auth.layout';
import { WriterWebFeatureAuthModule } from '@awread/writer/web/feature-auth';
@NgModule({
  imports: [
    CommonModule,
    WriterWebUiAuthRoutingModule,
    WriterWebFeatureAuthModule,
  ],
  declarations: [AuthLayout],
  exports: [AuthLayout],
})
export class WriterWebUiAuthModule {}

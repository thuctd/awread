import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterWebUiAuthRoutingModule } from './writer-web-ui-auth-routing.module';
import { AuthLayout } from './layouts/auth/auth.layout';
@NgModule({
  imports: [
    CommonModule,
    WriterWebUiAuthRoutingModule,
    // WriterWebFeatureAuthModule,
  ],
  declarations: [AuthLayout],
  exports: [AuthLayout, WriterWebUiAuthRoutingModule],
})
export class WriterWebUiAuthModule { }

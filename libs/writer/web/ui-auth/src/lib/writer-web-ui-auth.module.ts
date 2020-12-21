import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterWebUiAuthRoutingModule } from './writer-web-ui-auth-routing.module';
import { AuthLayout } from './layouts/auth/auth.layout';
import { WriterWebFeatureAuthModule } from '@awread/writer/web/feature-auth';
import {FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope,faUser, faLock } from '@fortawesome/free-solid-svg-icons';
@NgModule({
  imports: [CommonModule, WriterWebUiAuthRoutingModule, WriterWebFeatureAuthModule],
  declarations: [AuthLayout],
  exports: [AuthLayout],
})
export class WriterWebUiAuthModule { 
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faEnvelope,faUser, faLock);
  }
}

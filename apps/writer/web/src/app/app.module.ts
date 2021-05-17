import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WriterWebFeatureShellModule } from '@awread/writer/web/feature-shell';
import { GlobalSettingsModule } from '@awread/global/settings';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GlobalSettingsModule,
    WriterWebFeatureShellModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

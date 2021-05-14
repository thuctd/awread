import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReaderWebFeatureShellModule } from '@awread/reader/web/feature-shell';
import { GlobalSettingsModule } from '@awread/global/settings';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReaderWebFeatureShellModule, GlobalSettingsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

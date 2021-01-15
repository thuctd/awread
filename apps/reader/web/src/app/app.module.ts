import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReaderWebFeatureShellModule } from '@awread/reader/web/feature-shell';
import { GlobalCoreModule } from '@awread/global/core';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReaderWebFeatureShellModule, GlobalCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

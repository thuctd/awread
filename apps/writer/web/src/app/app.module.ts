import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WriterWebFeatureShellModule } from '@awread/writer/web/feature-shell';
import { GlobalCoreModule } from '@awread/global/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GlobalCoreModule, WriterWebFeatureShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

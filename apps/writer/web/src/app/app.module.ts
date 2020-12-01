import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WriterWebFeatureShellModule } from '@awread/writer/web/feature-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WriterWebFeatureShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

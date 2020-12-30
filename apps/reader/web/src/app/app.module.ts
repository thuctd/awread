import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReaderWebFeatureShellModule } from '@awread/reader/web/feature-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReaderWebFeatureShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

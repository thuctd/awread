import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReaderPhoneFeatureShellModule } from '@awread/reader/phone/feature-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReaderPhoneFeatureShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

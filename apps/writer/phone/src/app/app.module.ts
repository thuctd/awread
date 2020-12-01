import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WriterPhoneFeatureShellModule } from '@awread/writer/phone/feature-shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WriterPhoneFeatureShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

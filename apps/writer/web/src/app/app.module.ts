import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WriterWebShellModule } from '@awread/writer-web/shell';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WriterWebShellModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

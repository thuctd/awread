import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterWebUiAuthModule } from '@awread/writer/web/ui-auth';

@NgModule({
  imports: [CommonModule, WriterWebUiAuthModule],
})
export class WriterWebFeatureShellModule {}

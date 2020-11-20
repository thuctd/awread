import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellPage } from './shell/shell.page';
import { WriterWebFeatureShellRoutingModule } from './writer-web-feature-shell-routing.module';

@NgModule({
  imports: [CommonModule, WriterWebFeatureShellRoutingModule],
  declarations: [ShellPage],
})
export class WriterWebFeatureShellModule {}

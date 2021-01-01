import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailDesktopRoutingModule } from './detail-desktop-routing.module';
import { DetailDesktopPage } from './detail-desktop.page';
import { WriterWebUiCreationAtomicModule } from '../../atomics/writer-web-ui-creation-atomic.module';

@NgModule({
  declarations: [DetailDesktopPage],
  imports: [CommonModule, DetailDesktopRoutingModule, WriterWebUiCreationAtomicModule],
})
export class DetailDesktopModule {}

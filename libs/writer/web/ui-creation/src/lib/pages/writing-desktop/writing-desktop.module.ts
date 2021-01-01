import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WritingDesktopRoutingModule } from './writing-desktop-routing.module';
import { WritingDesktopPage } from './writing-desktop.page';
import { WriterWebUiCreationAtomicModule } from '../../atomics/writer-web-ui-creation-atomic.module';

@NgModule({
  declarations: [WritingDesktopPage],
  imports: [CommonModule, WritingDesktopRoutingModule, WriterWebUiCreationAtomicModule]
})
export class WritingDesktopModule {}

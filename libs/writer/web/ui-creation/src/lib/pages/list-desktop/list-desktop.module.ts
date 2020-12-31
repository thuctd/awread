import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDesktopRoutingModule } from './list-desktop-routing.module';
import { ListDesktopPage } from './list-desktop.page';
import { WriterWebUiCreationAtomicModule } from '../../atomics/writer-web-ui-creation-atomic.module';
import { GlobalPackagesModule } from '@awread/global/packages';

@NgModule({
  declarations: [ListDesktopPage],
  imports: [CommonModule, ListDesktopRoutingModule, WriterWebUiCreationAtomicModule, GlobalPackagesModule],
})
export class ListDesktopModule {}

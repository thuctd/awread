import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterWebUiSingleRoutingModule } from './writer-web-ui-single-routing.module';
import { SingleLayout } from './layouts/single/single.layout';
import { WriterWebFeatureSingleModule } from '@awread/writer/web/feature-single';
import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { WriterWebUiSingleAtomicModule } from './atomics/writer-web-ui-single-atomic.module';

@NgModule({
  imports: [
    CommonModule,
    WriterWebUiSingleRoutingModule,
    WriterWebFeatureSingleModule,
    WriterWebUiSingleAtomicModule,
  ],
  declarations: [SingleLayout],
  exports: [SingleLayout],
})
export class WriterWebUiSingleModule {

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterWebUiSingleRoutingModule } from './writer-web-ui-single-routing.module';
import { SingleLayout } from './layouts/single/single.layout';
import { WriterWebFeatureSingleModule } from '@awread/writer/web/feature-single';
import { WriterWebUiSingleAtomicModule } from './atomics/writer-web-ui-single-atomic.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    WriterWebUiSingleRoutingModule,
    WriterWebFeatureSingleModule,
    WriterWebUiSingleAtomicModule,
    RouterModule
  ],
  declarations: [SingleLayout],
  exports: [SingleLayout],
})
export class WriterWebUiSingleModule {

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
import { AccountCompleteOrgan } from './organs/account-complete/account-complete.organ';
@NgModule({
    imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule],
  exports: [CommonModule, AccountCompleteOrgan],
  declarations: [AccountCompleteOrgan]
})
export class WriterWebAtomicModule {}

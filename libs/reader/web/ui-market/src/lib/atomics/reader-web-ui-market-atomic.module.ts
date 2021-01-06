import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
import { ReviewItemMolec } from './molecs/review-item/review-item.molec';
@NgModule({
    imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule],
  exports: [CommonModule, ReviewItemMolec],
  declarations: [ReviewItemMolec]
})
export class ReaderWebUiMarketAtomicModule {}

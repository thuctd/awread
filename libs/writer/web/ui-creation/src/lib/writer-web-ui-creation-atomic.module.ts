import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
import { MolecTestMolec } from './molecs/molec-test/molec-test.molec';
@NgModule({
    imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule],
  exports: [CommonModule, MolecTestMolec],
  declarations: [MolecTestMolec]
})
export class WriterWebUiCreationAtomicModule {}

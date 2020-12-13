import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule } from '@awread/global/design-system';
import { ProfileFormMolec } from './molecs/profile-form/profile-form.molec';

@NgModule({
    imports: [CommonModule, StorybookSupportModule],
  exports: [CommonModule, ProfileFormMolec],
  declarations: [ProfileFormMolec]
})
export class WriterWebUiSingleAtomicModule {}

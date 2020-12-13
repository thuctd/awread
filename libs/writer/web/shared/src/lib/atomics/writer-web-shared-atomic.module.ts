import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule } from '@awread/global/design-system';
import { NavbarLinkMolec } from './molecs/navbar-link/navbar-link.molec';

@NgModule({
    imports: [CommonModule, StorybookSupportModule],
  exports: [CommonModule, NavbarLinkMolec],
  declarations: [NavbarLinkMolec]
})
export class WriterWebSharedAtomicModule {}

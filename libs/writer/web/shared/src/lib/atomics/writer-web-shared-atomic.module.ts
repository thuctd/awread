import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalDesignSystemAtomicModule, StorybookSupportModule } from '@awread/global/design-system';
import { NavbarLinkGroupMolec } from './molecs/navbar-link-group/navbar-link-group.molec';

@NgModule({
  imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule],
  exports: [CommonModule, NavbarLinkGroupMolec],
  declarations: [NavbarLinkGroupMolec]
})
export class WriterWebSharedAtomicModule { }

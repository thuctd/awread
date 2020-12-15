import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
import { LoginOrgan } from './organs/login/login.organ';
import { RegisterOrgan } from './organs/register/register.organ';
@NgModule({
    imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule],
  exports: [CommonModule, LoginOrgan, RegisterOrgan],
  declarations: [LoginOrgan, RegisterOrgan]
})
export class WriterWebUiCreationAtomicModule {}

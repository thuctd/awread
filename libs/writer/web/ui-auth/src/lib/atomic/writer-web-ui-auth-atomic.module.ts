import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalDesignSystemAtomicModule, StorybookSupportModule } from '@awread/global/design-system';
import { TabHeadMolec } from './molecs/tab-head/tab-head.molec';
import { LoginFormMolec } from './molecs/login-form/login-form.molec';
import { RegisterFormMolec } from './molecs/register-form/register-form.molec';
import { RememberForgotMolec } from './molecs/remember-forgot/remember-forgot.molec';
import { ActionBtnsMolec } from './molecs/action-btns/action-btns.molec';
import { LoginOrgan } from './organs/login/login.organ';
import { RegisterOrgan } from './organs/register/register.organ';
import { LoginRegisterTemplate } from './templates/login-register/login-register.template';
@NgModule({
  imports: [CommonModule, GlobalDesignSystemAtomicModule, StorybookSupportModule],
  exports: [CommonModule],
  declarations: [TabHeadMolec, LoginFormMolec, RegisterFormMolec, RememberForgotMolec, ActionBtnsMolec, LoginOrgan, RegisterOrgan, LoginRegisterTemplate]
})
export class WriterWebUiAuthAtomicModule { }

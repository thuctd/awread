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
import { ForgotPasswordTemplate } from './templates/forgot-password/forgot-password.template';
import { AuthBackgroundTemplate } from './templates/auth-background/auth-background.template';
import { ForgotHeaderMolec } from './molecs/forgot-header/forgot-header.molec';
import { ForgotFormMolec } from './molecs/forgot-form/forgot-form.molec';
import { ForgotOrgan } from './organs/forgot/forgot.organ';
import { ForgotActionsMolec } from './molecs/forgot-actions/forgot-actions.molec';
import { ForgotOptionsMolec } from './molecs/forgot-options/forgot-options.molec';
import { ForgotSentOrgan } from './organs/forgot-sent/forgot-sent.organ';
@NgModule({
  imports: [CommonModule, GlobalDesignSystemAtomicModule, StorybookSupportModule],
  exports: [CommonModule, ForgotPasswordTemplate, AuthBackgroundTemplate, ForgotHeaderMolec, ForgotFormMolec, ForgotOrgan, ForgotActionsMolec, ForgotOptionsMolec, ForgotSentOrgan],
  declarations: [TabHeadMolec, LoginFormMolec, RegisterFormMolec, RememberForgotMolec, ActionBtnsMolec, LoginOrgan, RegisterOrgan, LoginRegisterTemplate, ForgotPasswordTemplate, AuthBackgroundTemplate, ForgotHeaderMolec, ForgotFormMolec, ForgotOrgan, ForgotActionsMolec, ForgotOptionsMolec, ForgotSentOrgan]
})
export class WriterWebUiAuthAtomicModule { }

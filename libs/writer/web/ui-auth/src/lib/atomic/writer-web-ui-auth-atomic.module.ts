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
import { ForgotFormMolec } from './molecs/forgot-form/forgot-form.molec';
import { ForgotOrgan } from './organs/forgot/forgot.organ';
import { ForgotActionsMolec } from './molecs/forgot-actions/forgot-actions.molec';
import { ForgotOptionsMolec } from './molecs/forgot-options/forgot-options.molec';
import { ForgotSentOrgan } from './organs/forgot-sent/forgot-sent.organ';
import { AccountCompleteTemplate } from './templates/account-complete/account-complete.template';
import { AuthHeaderMolec } from './molecs/auth-header/auth-header.molec';
import { AccountCompleteOrganOrgan } from './organs/account-complete-organ/account-complete-organ.organ';
@NgModule({
  imports: [CommonModule, GlobalDesignSystemAtomicModule, StorybookSupportModule],
  exports: [CommonModule, ForgotPasswordTemplate, AuthBackgroundTemplate, AuthHeaderMolec, ForgotFormMolec, ForgotOrgan, ForgotActionsMolec, ForgotOptionsMolec, ForgotSentOrgan, AccountCompleteTemplate, AccountCompleteOrganOrgan],
  declarations: [TabHeadMolec, LoginFormMolec, RegisterFormMolec, RememberForgotMolec, ActionBtnsMolec, LoginOrgan, RegisterOrgan, LoginRegisterTemplate, ForgotPasswordTemplate, AuthBackgroundTemplate, AuthHeaderMolec, ForgotFormMolec, ForgotOrgan, ForgotActionsMolec, ForgotOptionsMolec, ForgotSentOrgan, AccountCompleteTemplate, AccountCompleteOrganOrgan]
})
export class WriterWebUiAuthAtomicModule { }

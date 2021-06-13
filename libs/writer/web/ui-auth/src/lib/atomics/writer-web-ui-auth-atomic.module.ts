import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalDesignSystemAtomicModule, StorybookSupportModule } from '@awread/global/design-system';
import { WrtTabHeadMolec } from './molecs/wrt-tab-head/wrt-tab-head.molec';
import { WrtActionBtnsMolec } from './molecs/wrt-action-btns/wrt-action-btns.molec';
import { WrtLoginOrgan } from './organs/wrt-login/wrt-login.organ';
import { WrtRegisterOrgan } from './organs/wrt-register/wrt-register.organ';
import { WrtLoginRegisterTemplate } from './templates/wrt-login-register/wrt-login-register.template';
import { WrtForgotPasswordTemplate } from './templates/wrt-forgot-password/wrt-forgot-password.template';
import { WrtAuthBackgroundTemplate } from './templates/wrt-auth-background/wrt-auth-background.template';
import { WrtForgotOrgan } from './organs/wrt-forgot/wrt-forgot.organ';
import { WrtForgotActionsMolec } from './molecs/wrt-forgot-actions/wrt-forgot-actions.molec';
import { WrtForgotSentOrgan } from './organs/wrt-forgot-sent/wrt-forgot-sent.organ';
import { WrtAccountCompleteTemplate } from './templates/wrt-account-complete/wrt-account-complete.template';
import { WrtAuthHeaderMolec } from './molecs/wrt-auth-header/wrt-auth-header.molec';
import { WrtNewPasswordTemplate } from './templates/wrt-new-password/wrt-new-password.template';
import { WrtNewPasswordFormMolec } from './molecs/wrt-new-password-form/wrt-new-password-form.molec';
import { WrtAccountCompleteOrgan } from './organs/wrt-account-complete/wrt-account-complete.organ';
import { WrtNewPasswordOrgan } from './organs/wrt-new-password/wrt-new-password.organ';
import { WrtRegisterCompleteFormMolec } from './molecs/wrt-register-complete-form/wrt-register-complete-form.molec';
import { MatStepperModule } from '@angular/material/stepper';
import { RegisterCompleteTemplate } from './templates/register-complete/register-complete.template';
import { RegisterCompleteDesktopOrgan } from './organs/register-complete-desktop/register-complete-desktop.organ';
import { RegisterCompleteMobileOrgan } from './organs/register-complete-mobile/register-complete-mobile.organ';
import { RegisterCompleteBackgroundTemplate } from './templates/register-complete-background/register-complete-background.template';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@NgModule({
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  imports: [CommonModule, GlobalDesignSystemAtomicModule, StorybookSupportModule, MatStepperModule],
  exports: [
    CommonModule,
    WrtTabHeadMolec,
    WrtActionBtnsMolec,
    WrtLoginOrgan,
    WrtRegisterOrgan,
    WrtLoginRegisterTemplate,
    WrtForgotPasswordTemplate,
    WrtAuthBackgroundTemplate,
    WrtAuthHeaderMolec,
    WrtForgotOrgan,
    WrtForgotActionsMolec,
    WrtForgotSentOrgan,
    WrtAccountCompleteTemplate,
    WrtNewPasswordTemplate,
    WrtNewPasswordFormMolec,
    WrtAccountCompleteOrgan,
    WrtNewPasswordOrgan,
    WrtRegisterCompleteFormMolec,
    RegisterCompleteTemplate,
    RegisterCompleteDesktopOrgan,
    RegisterCompleteMobileOrgan,
    RegisterCompleteBackgroundTemplate,
  ],
  declarations: [
    WrtTabHeadMolec,
    WrtActionBtnsMolec,
    WrtLoginOrgan,
    WrtRegisterOrgan,
    WrtLoginRegisterTemplate,
    WrtForgotPasswordTemplate,
    WrtAuthBackgroundTemplate,
    WrtAuthHeaderMolec,
    WrtForgotOrgan,
    WrtForgotActionsMolec,
    WrtForgotSentOrgan,
    WrtAccountCompleteTemplate,
    WrtNewPasswordTemplate,
    WrtNewPasswordFormMolec,
    WrtAccountCompleteOrgan,
    WrtNewPasswordOrgan,
    WrtRegisterCompleteFormMolec,
    RegisterCompleteTemplate,
    RegisterCompleteDesktopOrgan,
    RegisterCompleteMobileOrgan,
    RegisterCompleteBackgroundTemplate,
  ],
})
export class WriterWebUiAuthAtomicModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// TODO: looking ways to 
// import { WriterWebUiAuthAtomicModule } from '@awread/writer/web/ui-auth';
import { GlobalDesignSystemAtomicModule, StorybookSupportModule } from '@awread/global/design-system';
import { BgAuthMobileMolec } from './molecs/bg-auth-mobile/bg-auth-mobile.molec';
import { CheckMailMolec } from './molecs/check-mail/check-mail.molec';
import { InterrogatoryMolec } from './molecs/interrogatory/interrogatory.molec';
import { RememberForgotPasswordMolec } from './molecs/remember-forgot-password/remember-forgot-password.molec';
import { SubmitMolec } from './molecs/submit/submit.molec';
import { LoginOrgan } from './organs/login/login.organ';
import { RegisterOrgan } from './organs/register/register.organ';
import { CheckMailMobileTemplate } from './templates/check-mail-mobile/check-mail-mobile.template';
import { CheckMailWebTemplate } from './templates/check-mail-web/check-mail-web.template';
import { ForgotMobileTemplate } from './templates/forgot-mobile/forgot-mobile.template';
import { ForgotWebTemplate } from './templates/forgot-web/forgot-web.template';
import { LoginMobileTemplate } from './templates/login-mobile/login-mobile.template';
import { LoginWebTemplate } from './templates/login-web/login-web.template';
import { RegisterMobileTemplate } from './templates/register-mobile/register-mobile.template';
import { RegisterWebTemplate } from './templates/register-web/register-web.template';
import { LoginFormMolec } from './molecs/login-form/login-form.molec';
import { RegisterFormMolec } from './molecs/register-form/register-form.molec';
import { ForgotFormMolec } from './molecs/forgot-form/forgot-form.molec';

@NgModule({
  imports: [
    CommonModule,
    StorybookSupportModule,
    GlobalDesignSystemAtomicModule,
    // WriterWebUiAuthAtomicModule,
  ],
  exports: [
    BgAuthMobileMolec,
    CheckMailMolec,
    InterrogatoryMolec,
    RememberForgotPasswordMolec,
    SubmitMolec,
    LoginOrgan,
    RegisterOrgan,
    CheckMailMobileTemplate,
    CheckMailWebTemplate,
    ForgotMobileTemplate,
    ForgotWebTemplate,
    LoginMobileTemplate,
    LoginWebTemplate,
    RegisterMobileTemplate,
    RegisterWebTemplate,
    LoginFormMolec,
    RegisterFormMolec,
    ForgotFormMolec,
  ],
  declarations: [
    BgAuthMobileMolec,
    CheckMailMolec,
    InterrogatoryMolec,
    RememberForgotPasswordMolec,
    SubmitMolec,
    LoginOrgan,
    RegisterOrgan,
    CheckMailMobileTemplate,
    CheckMailWebTemplate,
    ForgotMobileTemplate,
    ForgotWebTemplate,
    LoginMobileTemplate,
    LoginWebTemplate,
    RegisterMobileTemplate,
    RegisterWebTemplate,
    LoginFormMolec,
    RegisterFormMolec,
    ForgotFormMolec,
  ],
})
export class ReaderWebUiAuthAtomicModule { }

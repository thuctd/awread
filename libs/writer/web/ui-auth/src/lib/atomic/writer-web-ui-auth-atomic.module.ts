import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabHeadGroup } from './groups/tab-head/tab-head.group';
import { LoginFormGroup } from './groups/login-form/login-form.group';
import { SignupFormGroup } from './groups/signup-form/signup-form.group';
import { RememberForgotGroup } from './groups/remember-forgot/remember-forgot.group';
import { ActionBtnsGroup } from './groups/action-btns/action-btns.group';
import { BannerAtom } from './atoms/banner/banner.atom';
import { TabBtnAtom } from './atoms/tab-btn/tab-btn.atom';
import { LogoAtom } from './atoms/logo/logo.atom';
import { InputAtom } from './atoms/input/input.atom';
import { CheckBtnAtom } from './atoms/check-btn/check-btn.atom';
import { ForgotBtnAtom } from './atoms/forgot-btn/forgot-btn.atom';
import { SubmitBtnAtom } from './atoms/submit-btn/submit-btn.atom';
import { SocialBtnAtom } from './atoms/social-btn/social-btn.atom';
import { StorybookSupportModule } from './storybook-support.module';


@NgModule({
  imports: [CommonModule, StorybookSupportModule],
  exports: [CommonModule, TabHeadGroup, LoginFormGroup, SignupFormGroup, RememberForgotGroup, ActionBtnsGroup, BannerAtom, TabBtnAtom, LogoAtom, InputAtom, CheckBtnAtom, ForgotBtnAtom, SubmitBtnAtom, SocialBtnAtom],
  declarations: [TabHeadGroup, LoginFormGroup, SignupFormGroup, RememberForgotGroup, ActionBtnsGroup, BannerAtom, TabBtnAtom, LogoAtom, InputAtom, CheckBtnAtom, ForgotBtnAtom, SubmitBtnAtom, SocialBtnAtom]
})
export class WriterWebUiAuthAtomicModule {}

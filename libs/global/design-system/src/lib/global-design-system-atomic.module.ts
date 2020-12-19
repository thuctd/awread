import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthBgAtom } from './atoms/auth-bg/auth-bg.atom';
import { CheckBtnAtom } from './atoms/check-btn/check-btn.atom';
import { InputFormAtom } from './atoms/input-form/input-form.atom';
import { LinkBtnAtom } from './atoms/link-btn/link-btn.atom';
import { LogoAtom } from './atoms/logo/logo.atom';
import { SocialBtnAtom } from './atoms/social-btn/social-btn.atom';
import { SubmitBtnAtom } from './atoms/submit-btn/submit-btn.atom';
import { TabBtnAtom } from './atoms/tab-btn/tab-btn.atom';
import { StorybookSupportModule } from './storybook-support.module';
import { NavbarLinkAtom } from './atoms/navbar-link/navbar-link.atom';
import { NavbarIconAtom } from './atoms/navbar-icon/navbar-icon.atom';

import { AuthHeaderAtom } from './atoms/auth-header/auth-header.atom';
import { AuthDescriptionAtom } from './atoms/auth-description/auth-description.atom';
import { OptionLinkAtom } from './atoms/option-link/option-link.atom';

@NgModule({
  imports: [CommonModule, StorybookSupportModule],
  exports: [TabBtnAtom, LogoAtom, InputFormAtom, CheckBtnAtom, LinkBtnAtom, SubmitBtnAtom, SocialBtnAtom, AuthBgAtom, NavbarLinkAtom, NavbarIconAtom,  AuthHeaderAtom, AuthDescriptionAtom, OptionLinkAtom],
  declarations: [TabBtnAtom, LogoAtom, InputFormAtom, CheckBtnAtom, LinkBtnAtom, SubmitBtnAtom, SocialBtnAtom, AuthBgAtom, NavbarLinkAtom, NavbarIconAtom,  AuthHeaderAtom, AuthDescriptionAtom, OptionLinkAtom],
})
export class GlobalDesignSystemAtomicModule { }

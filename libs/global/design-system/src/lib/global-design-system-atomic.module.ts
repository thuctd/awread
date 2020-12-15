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
import { TestMolec } from './molecs/test/test.molec';

@NgModule({
  imports: [CommonModule, StorybookSupportModule],
  exports: [TabBtnAtom, LogoAtom, InputFormAtom, CheckBtnAtom, LinkBtnAtom, SubmitBtnAtom, SocialBtnAtom, AuthBgAtom, NavbarLinkAtom, NavbarIconAtom, TestMolec],
  declarations: [TabBtnAtom, LogoAtom, InputFormAtom, CheckBtnAtom, LinkBtnAtom, SubmitBtnAtom, SocialBtnAtom, AuthBgAtom, NavbarLinkAtom, NavbarIconAtom, TestMolec],
})
export class GlobalDesignSystemAtomicModule { }

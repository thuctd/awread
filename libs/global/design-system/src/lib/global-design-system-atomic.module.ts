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
import { searchNavtopAtom } from './atoms/search-navtop/search-navtop.atom';
import { MenuNavtopAtom } from './atoms/menu-navtop/menu-navtop.atom';
import { MenuNavleftAtom } from './atoms/menu-navleft/menu-navleft.atom';
import { InputFormProfileAtom } from './atoms/input-form-profile/input-form-profile.atom';
import { TitleFormProfileAtom } from './atoms/title-form-profile/title-form-profile.atom';
import { BigimgProfileAtom } from './atoms/bigimg-profile/bigimg-profile.atom';
import { SmailimgProfileAtom } from './atoms/smailimg-profile/smailimg-profile.atom';
import { ChangephotoProfileAtom } from './atoms/changephoto-profile/changephoto-profile.atom';

@NgModule({
  imports: [CommonModule, StorybookSupportModule],
  exports: [
    TabBtnAtom,
    LogoAtom,
    InputFormAtom,
    CheckBtnAtom,
    LinkBtnAtom,
    SubmitBtnAtom,
    SocialBtnAtom,
    AuthBgAtom,
    NavbarLinkAtom,
    NavbarIconAtom,
    TestMolec,
    searchNavtopAtom,
    MenuNavtopAtom,
    MenuNavleftAtom,
    InputFormProfileAtom,
    TitleFormProfileAtom,
    BigimgProfileAtom,
    SmailimgProfileAtom,
    ChangephotoProfileAtom,
  ],
  declarations: [
    TabBtnAtom,
    LogoAtom,
    InputFormAtom,
    CheckBtnAtom,
    LinkBtnAtom,
    SubmitBtnAtom,
    SocialBtnAtom,
    AuthBgAtom,
    NavbarLinkAtom,
    NavbarIconAtom,
    TestMolec,
    searchNavtopAtom,
    MenuNavtopAtom,
    MenuNavleftAtom,
    InputFormProfileAtom,
    TitleFormProfileAtom,
    BigimgProfileAtom,
    SmailimgProfileAtom,
    ChangephotoProfileAtom,
  ],
})
export class GlobalDesignSystemAtomicModule {}

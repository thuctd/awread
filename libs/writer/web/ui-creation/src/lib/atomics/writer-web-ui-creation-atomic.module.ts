import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
import { LoginOrgan } from './organs/login/login.organ';
import { RegisterOrgan } from './organs/register/register.organ';
import { WrtSubmitBtnAtom } from './atoms/wrt-submit-btn/wrt-submit-btn.atom';
import { WrtSocialBtnAtom } from './atoms/wrt-social-btn/wrt-social-btn.atom';
import { WrtBgAtom } from './atoms/wrt-bg/wrt-bg.atom';
import { WrtMenuBtnAtom } from './atoms/wrt-menu-btn/wrt-menu-btn.atom';
import { WrtBookImgAtom } from './atoms/wrt-book-img/wrt-book-img.atom';
import { WrtTitleAtom } from './atoms/wrt-title/wrt-title.atom';
import { WrtToolsAtom } from './atoms/wrt-tools/wrt-tools.atom';
import { WrtHeadMolec } from './molecs/wrt-head/wrt-head.molec';
import { WrtWriterMolec } from './molecs/wrt-writer/wrt-writer.molec';

@NgModule({
    imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule],
  exports: [CommonModule, LoginOrgan, RegisterOrgan, WrtSubmitBtnAtom, WrtSocialBtnAtom, WrtBgAtom, WrtMenuBtnAtom, WrtBookImgAtom, WrtTitleAtom, WrtToolsAtom, WrtHeadMolec, WrtWriterMolec],
  declarations: [LoginOrgan, RegisterOrgan, WrtSubmitBtnAtom, WrtSocialBtnAtom, WrtBgAtom, WrtMenuBtnAtom, WrtBookImgAtom, WrtTitleAtom, WrtToolsAtom, WrtHeadMolec, WrtWriterMolec]
})
export class WriterWebUiCreationAtomicModule {}

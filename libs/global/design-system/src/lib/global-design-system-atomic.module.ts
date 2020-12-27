import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthBgAtom } from './atomics/auth-bg/auth-bg.atom';
import { CheckBtnAtom } from './atomics/check-btn/check-btn.atom';
import { InputFormAtom } from './atomics/input-form/input-form.atom';
import { LinkBtnAtom } from './atomics/link-btn/link-btn.atom';
import { LogoAtom } from './atomics/logo/logo.atom';
import { SocialBtnAtom } from './atomics/social-btn/social-btn.atom';
import { SubmitBtnAtom } from './atomics/submit-btn/submit-btn.atom';
import { TabBtnAtom } from './atomics/tab-btn/tab-btn.atom';
import { AuthTitleAtom } from './atomics/auth-title/auth-title.atom';
import { AuthDescriptionAtom } from './atomics/auth-description/auth-description.atom';
import { OptionLinkAtom } from './atomics/option-link/option-link.atom';

import { StorybookSupportModule } from './storybook-support.module';
import { NavbarLinkAtom } from './atomics/navbar-link/navbar-link.atom';
import { NavbarIconAtom } from './atomics/navbar-icon/navbar-icon.atom';
import { searchNavtopAtom } from './atomics/search-navtop/search-navtop.atom';
import { MenuNavtopAtom } from './atomics/menu-navtop/menu-navtop.atom';
import { MenuNavleftAtom } from './atomics/menu-navleft/menu-navleft.atom';
import { InputFormProfileAtom } from './atomics/input-form-profile/input-form-profile.atom';
import { TitleFormProfileAtom } from './atomics/title-form-profile/title-form-profile.atom';
import { BigimgProfileAtom } from './atomics/bigimg-profile/bigimg-profile.atom';
import { SmailimgProfileAtom } from './atomics/smailimg-profile/smailimg-profile.atom';
import { ChangephotoProfileAtom } from './atomics/changephoto-profile/changephoto-profile.atom';
import { WrtBgAtom } from './atomics/wrt-bg/wrt-bg.atom';
import { WrtMenuBtnAtom } from './atomics/wrt-menu-btn/wrt-menu-btn.atom';
import { WrtBookImgAtom } from './atomics/wrt-book-img/wrt-book-img.atom';
import { WrtTitleAtom } from './atomics/wrt-title/wrt-title.atom';
import { WrtInfoBookAtom } from './atomics/wrt-info-book/wrt-info-book.atom';
import { DetailInputFormAtom } from './atomics/detail-input-form/detail-input-form.atom';
import { DetailToogleFormAtom } from './atomics/detail-toogle-form/detail-toogle-form.atom';
import { DetailUploadImgAtom } from './atomics/detail-upload-img/detail-upload-img.atom';
import { DetailCmbFormAtom } from './atomics/detail-cmb-form/detail-cmb-form.atom';
import { DetailTextareaFormAtom } from './atomics/detail-textarea-form/detail-textarea-form.atom';
import { ListTitleBookAtom } from './atomics/list-title-book/list-title-book.atom';
import { ListImgBookAtom } from './atomics/list-img-book/list-img-book.atom';
import { ListReviewBookAtom } from './atomics/list-review-book/list-review-book.atom';
import { ListTypeBookAtom } from './atomics/list-type-book/list-type-book.atom';
import { ListRatingBookAtom } from './atomics/list-rating-book/list-rating-book.atom';
import { ListChapterBookAtom } from './atomics/list-chapter-book/list-chapter-book.atom';
import { ListUdBookAtom } from './atomics/list-ud-book/list-ud-book.atom';
import { ListSocialMenuAtom } from './atomics/list-social-menu/list-social-menu.atom';
import { ListSocialBtnAtom } from './atomics/list-social-btn/list-social-btn.atom';
import { SocialMenuAtom } from './atomics/social-menu/social-menu.atom';
import { DetailTitlePartAtom } from './atomics/detail-title-part/detail-title-part.atom';
import { DetailUdPartAtom } from './atomics/detail-ud-part/detail-ud-part.atom';
import { DetailReviewPartAtom } from './atomics/detail-review-part/detail-review-part.atom';
import { DetailSocialMenuAtom } from './atomics/detail-social-menu/detail-social-menu.atom';
import { WrtIconMenuAtom } from './atomics/wrt-icon-menu/wrt-icon-menu.atom';
import { WrtSocialMenuAtom } from './atomics/wrt-social-menu/wrt-social-menu.atom';
import { CreationSubmitBtnAtom } from './atomics/creation-submit-btn/creation-submit-btn.atom';
import { CreationSocialBtnAtom } from './atomics/creation-social-btn/creation-social-btn.atom';
import { QuillModule } from 'ngx-quill';
import { WrtEditerAtom } from './atomics/wrt-editer/wrt-editer.atom';

@NgModule({
  imports: [CommonModule, StorybookSupportModule, QuillModule.forRoot()],
  exports: [
    TabBtnAtom,
    LogoAtom,
    InputFormAtom,
    CheckBtnAtom,
    LinkBtnAtom,
    SubmitBtnAtom,
    SocialBtnAtom,
    AuthBgAtom,
    AuthTitleAtom,
    AuthDescriptionAtom,
    OptionLinkAtom,
    NavbarLinkAtom,
    NavbarIconAtom,
    searchNavtopAtom,
    MenuNavtopAtom,
    MenuNavleftAtom,
    InputFormProfileAtom,
    TitleFormProfileAtom,
    BigimgProfileAtom,
    SmailimgProfileAtom,
    ChangephotoProfileAtom,
    WrtBgAtom,
    WrtMenuBtnAtom,
    WrtBookImgAtom,
    WrtTitleAtom,
    WrtInfoBookAtom,
    WrtIconMenuAtom,
    WrtSocialMenuAtom,
    WrtEditerAtom,
    DetailInputFormAtom,
    DetailToogleFormAtom,
    DetailUploadImgAtom,
    DetailCmbFormAtom,
    DetailTextareaFormAtom,
    DetailTitlePartAtom,
    DetailUdPartAtom,
    DetailReviewPartAtom,
    ListTitleBookAtom,
    ListImgBookAtom,
    ListReviewBookAtom,
    ListTypeBookAtom,
    ListRatingBookAtom,
    ListChapterBookAtom,
    ListUdBookAtom,
    ListSocialMenuAtom,
    ListSocialBtnAtom,
    SocialMenuAtom,
    DetailSocialMenuAtom,
    CreationSubmitBtnAtom,
    CreationSocialBtnAtom,
    QuillModule
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
    AuthTitleAtom,
    AuthDescriptionAtom,
    OptionLinkAtom,
    NavbarLinkAtom,
    NavbarIconAtom,
    searchNavtopAtom,
    MenuNavtopAtom,
    MenuNavleftAtom,
    InputFormProfileAtom,
    TitleFormProfileAtom,
    BigimgProfileAtom,
    SmailimgProfileAtom,
    ChangephotoProfileAtom,
    InputFormProfileAtom,
    TitleFormProfileAtom,
    BigimgProfileAtom,
    SmailimgProfileAtom,
    ChangephotoProfileAtom,
    WrtBgAtom,
    WrtMenuBtnAtom,
    WrtBookImgAtom,
    WrtTitleAtom,
    WrtInfoBookAtom,
    WrtIconMenuAtom,
    WrtSocialMenuAtom,
    WrtEditerAtom,
    DetailInputFormAtom,
    DetailToogleFormAtom,
    DetailUploadImgAtom,
    DetailCmbFormAtom,
    DetailTextareaFormAtom,
    DetailTitlePartAtom,
    DetailUdPartAtom,
    DetailReviewPartAtom,
    ListTitleBookAtom,
    ListImgBookAtom,
    ListReviewBookAtom,
    ListTypeBookAtom,
    ListRatingBookAtom,
    ListChapterBookAtom,
    ListUdBookAtom,
    ListSocialMenuAtom,
    ListSocialBtnAtom,
    SocialMenuAtom,
    DetailSocialMenuAtom,
    CreationSubmitBtnAtom,
    CreationSocialBtnAtom
  ],
})
export class GlobalDesignSystemAtomicModule { }

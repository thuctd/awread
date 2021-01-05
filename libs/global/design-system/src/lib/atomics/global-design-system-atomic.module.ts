import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule } from '../storybook-support.module';

import { AuthBgAtom } from './atoms/auth-bg/auth-bg.atom';
import { CheckBtnAtom } from './atoms/check-btn/check-btn.atom';
import { InputFormAtom } from './atoms/input-form/input-form.atom';
import { LinkBtnAtom } from './atoms/link-btn/link-btn.atom';
import { LogoAtom } from './atoms/logo/logo.atom';
import { SocialBtnAtom } from './atoms/social-btn/social-btn.atom';
import { SubmitBtnAtom } from './atoms/submit-btn/submit-btn.atom';
import { TabBtnAtom } from './atoms/tab-btn/tab-btn.atom';
import { AuthTitleAtom } from './atoms/auth-title/auth-title.atom';
import { AuthDescriptionAtom } from './atoms/auth-description/auth-description.atom';
import { OptionLinkAtom } from './atoms/option-link/option-link.atom';
import { NavbarLinkAtom } from './atoms/navbar-link/navbar-link.atom';
import { NavbarIconAtom } from './atoms/navbar-icon/navbar-icon.atom';
import { searchNavtopAtom } from './atoms/search-navtop/search-navtop.atom';
import { MenuNavtopAtom } from './atoms/menu-navtop/menu-navtop.atom';
import { MenuNavleftAtom } from './atoms/menu-navleft/menu-navleft.atom';
import { InputFormProfileAtom } from './atoms/input-form-profile/input-form-profile.atom';
import { TitleFormProfileAtom } from './atoms/title-form-profile/title-form-profile.atom';
import { BigimgProfileAtom } from './atoms/bigimg-profile/bigimg-profile.atom';
import { SmailimgProfileAtom } from './atoms/smailimg-profile/smailimg-profile.atom';
import { ChangephotoProfileAtom } from './atoms/changephoto-profile/changephoto-profile.atom';
import { WrtBgAtom } from './atoms/wrt-bg/wrt-bg.atom';
import { WrtMenuBtnAtom } from './atoms/wrt-menu-btn/wrt-menu-btn.atom';
import { WrtBookImgAtom } from './atoms/wrt-book-img/wrt-book-img.atom';
import { WrtTitleAtom } from './atoms/wrt-title/wrt-title.atom';
import { WrtInfoBookAtom } from './atoms/wrt-info-book/wrt-info-book.atom';
import { DetailInputFormAtom } from './atoms/detail-input-form/detail-input-form.atom';
import { DetailToogleFormAtom } from './atoms/detail-toogle-form/detail-toogle-form.atom';
import { DetailUploadImgAtom } from './atoms/detail-upload-img/detail-upload-img.atom';
import { DetailCmbFormAtom } from './atoms/detail-cmb-form/detail-cmb-form.atom';
import { DetailTextareaFormAtom } from './atoms/detail-textarea-form/detail-textarea-form.atom';
import { ListTitleBookAtom } from './atoms/list-title-book/list-title-book.atom';
import { ListImgBookAtom } from './atoms/list-img-book/list-img-book.atom';
import { ListReviewBookAtom } from './atoms/list-review-book/list-review-book.atom';
import { ListTypeBookAtom } from './atoms/list-type-book/list-type-book.atom';
import { ListRatingBookAtom } from './atoms/list-rating-book/list-rating-book.atom';
import { ListChapterBookAtom } from './atoms/list-chapter-book/list-chapter-book.atom';
import { ListUdBookAtom } from './atoms/list-ud-book/list-ud-book.atom';
import { ListSocialMenuAtom } from './atoms/list-social-menu/list-social-menu.atom';
import { ListSocialBtnAtom } from './atoms/list-social-btn/list-social-btn.atom';
import { SocialMenuAtom } from './atoms/social-menu/social-menu.atom';
import { DetailTitlePartAtom } from './atoms/detail-title-part/detail-title-part.atom';
import { DetailUdPartAtom } from './atoms/detail-ud-part/detail-ud-part.atom';
import { DetailReviewPartAtom } from './atoms/detail-review-part/detail-review-part.atom';
import { DetailSocialMenuAtom } from './atoms/detail-social-menu/detail-social-menu.atom';
import { WrtIconMenuAtom } from './atoms/wrt-icon-menu/wrt-icon-menu.atom';
import { WrtSocialMenuAtom } from './atoms/wrt-social-menu/wrt-social-menu.atom';
import { CreationSubmitBtnAtom } from './atoms/creation-submit-btn/creation-submit-btn.atom';
import { CreationSocialBtnAtom } from './atoms/creation-social-btn/creation-social-btn.atom';
import { QuillModule } from 'ngx-quill';
import { WrtEditerAtom } from './atoms/wrt-editer/wrt-editer.atom';

import { PaginationAtom } from './atoms/pagination/pagination.atom';
import { RatingAtom } from './atoms/rating/rating.atom';
import { TitleItemAtom } from './atoms/title-item/title-item.atom';
import { RdHomeIconRatingAtom } from './atoms/rd-home-icon-rating/rd-home-icon-rating.atom';
import { RdHomeTabBookAtom } from './atoms/rd-home-tab-book/rd-home-tab-book.atom';
import { RdHomeTabCategoryAtom } from './atoms/rd-home-tab-category/rd-home-tab-category.atom';
import { RdListPublicationDateAtom } from './atoms/rd-list-publication-date/rd-list-publication-date.atom';
import { RdListContentNovelAtom } from './atoms/rd-list-content-novel/rd-list-content-novel.atom';
import { ImgMAtom } from './atoms/img-m/img-m.atom';
import { CommentAtom } from './atoms/comment/comment.atom';
import { BaseBtnAtom } from './atoms/base-btn/base-btn.atom';
import { BaseLinkAtom } from './atoms/base-link/base-link.atom';
import { RdListTabPageAtom } from './atoms/rd-list-tab-page/rd-list-tab-page.atom';
import { AuthorAtom } from './atoms/author/author.atom';

import { DefaultCoverAtom } from './atoms/default-cover/default-cover.atom';
import { DefaultCoverModule } from '@awread/global/packages';


@NgModule({
  imports: [CommonModule, StorybookSupportModule, QuillModule.forRoot(), DefaultCoverModule],
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
    QuillModule,
    PaginationAtom,
    RatingAtom,
    TitleItemAtom,
    RdHomeIconRatingAtom,
    RdHomeTabBookAtom,
    RdHomeTabCategoryAtom,
    RdListPublicationDateAtom,
    RdListContentNovelAtom,
    RdListTabPageAtom,
    ImgMAtom,
    CommentAtom,
    BaseBtnAtom,
    BaseLinkAtom,
    AuthorAtom,
    DefaultCoverAtom

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
    CreationSocialBtnAtom,
    PaginationAtom,
    RatingAtom,
    TitleItemAtom,
    RdHomeIconRatingAtom,
    RdHomeTabBookAtom,
    RdHomeTabCategoryAtom,
    RdListPublicationDateAtom,
    RdListTabPageAtom,
    RdListContentNovelAtom,
    ImgMAtom,
    CommentAtom,
    BaseBtnAtom,
    BaseLinkAtom,
    AuthorAtom,
    DefaultCoverAtom
  ],
})
export class GlobalDesignSystemAtomicModule { }

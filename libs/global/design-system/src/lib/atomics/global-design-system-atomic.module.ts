import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule } from '../storybook-support.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthBgAtom } from './atoms/auth-bg/auth-bg.atom';
import { CheckBtnAtom } from './atoms/check-btn/check-btn.atom';
import { InputFormAtom } from './atoms/input-form/input-form.atom';
import { LogoAtom } from './atoms/logo/logo.atom';
import { SocialBtnAtom } from './atoms/social-btn/social-btn.atom';
import { SubmitBtnAtom } from './atoms/submit-btn/submit-btn.atom';
import { TabBtnAtom } from './atoms/tab-btn/tab-btn.atom';
import { AuthTitleAtom } from './atoms/auth-title/auth-title.atom';
import { AuthDescriptionAtom } from './atoms/auth-description/auth-description.atom';
import { OptionLinkAtom } from './atoms/option-link/option-link.atom';
import { NavbarIconAtom } from './atoms/navbar-icon/navbar-icon.atom';
import { searchNavtopAtom } from './atoms/search-navtop/search-navtop.atom';
import { MenuNavtopAtom } from './atoms/menu-navtop/menu-navtop.atom';
import { MenuNavleftAtom } from './atoms/menu-navleft/menu-navleft.atom';
import { InputFormProfileAtom } from './atoms/input-form-profile/input-form-profile.atom';
import { imgProfileAtom } from './atoms/img-profile/img-profile.atom';
import { ChangephotoProfileAtom } from './atoms/changephoto-profile/changephoto-profile.atom';
import { WrtMenuBtnAtom } from './atoms/wrt-menu-btn/wrt-menu-btn.atom';
import { WrtBookImgAtom } from './atoms/wrt-book-img/wrt-book-img.atom';
import { WrtTitleAtom } from './atoms/wrt-title/wrt-title.atom';
import { WrtInfoBookAtom } from './atoms/wrt-info-book/wrt-info-book.atom';
import { DetailInputFormAtom } from './atoms/detail-input-form/detail-input-form.atom';
import { DetailToogleFormAtom } from './atoms/detail-toogle-form/detail-toogle-form.atom';
import { DetailUploadImgAtom } from './atoms/detail-upload-img/detail-upload-img.atom';
import { DetailCmbFormAtom } from './atoms/detail-cmb-form/detail-cmb-form.atom';
import { DetailTextareaFormAtom } from './atoms/detail-textarea-form/detail-textarea-form.atom';
import { ListTypeBookAtom } from './atoms/list-type-book/list-type-book.atom';
import { ListChapterBookAtom } from './atoms/list-chapter-book/list-chapter-book.atom';
import { ListUdBookAtom } from './atoms/list-ud-book/list-ud-book.atom';
import { ListSocialMenuAtom } from './atoms/list-social-menu/list-social-menu.atom';
import { ListSocialBtnAtom } from './atoms/list-social-btn/list-social-btn.atom';
import { DetailUdPartAtom } from './atoms/detail-ud-part/detail-ud-part.atom';
import { DetailSocialMenuAtom } from './atoms/detail-social-menu/detail-social-menu.atom';
import { WrtSocialMenuAtom } from './atoms/wrt-social-menu/wrt-social-menu.atom';
import { CreationSubmitBtnAtom } from './atoms/creation-submit-btn/creation-submit-btn.atom';
import { QuillModule } from 'ngx-quill';
import { WrtEditerAtom } from './atoms/wrt-editer/wrt-editer.atom';
import { SelectAtom } from './atoms/select/select.atom';
import { SearchNavbarAtom } from './atoms/search-navbar/search-navbar.atom';
import { SearchBookAtom } from './atoms/search-book/search-book.atom';
import { LogoNolinkAtom } from './atoms/logo-nolink/logo-nolink.atom';
import { AuthBgMobileAtom } from './atoms/auth-bg-mobile/auth-bg-mobile.atom';
import { BarSeperateAtom } from './atoms/bar-seperate/bar-seperate.atom';
import { ExampleDialogAtom } from './atoms/example-dialog/example-dialog.atom';
import { PaginationAtom } from './atoms/pagination/pagination.atom';
import { RatingAtom } from './atoms/rating/rating.atom';
import { RdHomeIconRatingAtom } from './atoms/rd-home-icon-rating/rd-home-icon-rating.atom';
import { RdHomeTabBookAtom } from './atoms/rd-home-tab-book/rd-home-tab-book.atom';
import { RdHomeTabCategoryAtom } from './atoms/rd-home-tab-category/rd-home-tab-category.atom';
import { RdListPublicationDateAtom } from './atoms/rd-list-publication-date/rd-list-publication-date.atom';
import { ExcerptAtom } from './atoms/excerpt/excerpt.atom';
import { ImgMAtom } from './atoms/img-m/img-m.atom';
import { BaseBtnAtom } from './atoms/base-btn/base-btn.atom';
import { AuthorAtom } from './atoms/author/author.atom';
import { NgImageSliderModule } from 'ng-image-slider';
import { DefaultCoverAtom } from './atoms/default-cover/default-cover.atom';
import { DefaultCoverModule, CloseOnOutsideModule } from '@awread/global/packages';
import { NavLinkAtom } from './atoms/nav-link/nav-link.atom';
import { DropdownLinkAtom } from './atoms/dropdown-link/dropdown-link.atom';
import { BreadcrumbLinkAtom } from './atoms/breadcrumb-link/breadcrumb-link.atom';
import { IconTextAtom } from './atoms/icon-text/icon-text.atom';
import { DetailInfoLineAtom } from './atoms/detail-info-line/detail-info-line.atom';
import { RoundBtnAtom } from './atoms/round-btn/round-btn.atom';
import { DetailImageAtom } from './atoms/detail-image/detail-image.atom';
import { IconTextButtonAtom } from './atoms/icon-text-button/icon-text-button.atom';
import { LabelUnderlineAtom } from './atoms/label-underline/label-underline.atom';
import { IconBtnAtom } from './atoms/icon-btn/icon-btn.atom';
import { ReviewActionAtom } from './atoms/review-action/review-action.atom';
import { ReviewInputAtom } from './atoms/review-input/review-input.atom';
import { SearchBtnAtom } from './atoms/search-btn/search-btn.atom';
import { ChapterPriceAtom } from './atoms/chapter-price/chapter-price.atom';
import { NavbarAuthBtnAtom } from './atoms/navbar-auth-btn/navbar-auth-btn.atom';
import { NavbarBtnLoggedAtom } from './atoms/navbar-btn-logged/navbar-btn-logged.atom';
import { CircleImageAtom } from './atoms/circle-image/circle-image.atom';
import { SliderAtom } from './atoms/slider/slider.atom';
import { TitleAtom } from './atoms/title/title.atom';
import { TextLinkAtom } from './atoms/text-link/text-link.atom';
import { TitleBookAtom } from './atoms/title-book/title-book.atom';
import { RdListTabPageAtom } from './atoms/rd-list-tab-page/rd-list-tab-page.atom';
import { BtnSwitchChapterAtom } from './atoms/btn-switch-chapter/btn-switch-chapter.atom';
import { BtnSelectAtom } from './atoms/btn-select/btn-select.atom';
import { BtnBackToTopAtom } from './atoms/btn-back-to-top/btn-back-to-top.atom';
import { PopupCoverHeaderAtom } from './atoms/popup-cover-header/popup-cover-header.atom';
import { ProcessBarAtom } from './atoms/process-bar/process-bar.atom';
import { BtnInputFileAtom } from './atoms/btn-input-file/btn-input-file.atom';
import { LinkAtom } from './atoms/link/link.atom';
import { DetailInfoLineLinkAtom } from './atoms/detail-info-line-link/detail-info-line-link.atom';
import { NavItemAtom } from './atoms/nav-item/nav-item.atom';

@NgModule({
  imports: [
    CommonModule,
    StorybookSupportModule,
    MatDialogModule,
    QuillModule.forRoot(),
    DefaultCoverModule,
    CloseOnOutsideModule,
    NgImageSliderModule,
  ],
  exports: [
    NgImageSliderModule,
    CloseOnOutsideModule,
    TabBtnAtom,
    LogoAtom,
    InputFormAtom,
    CheckBtnAtom,
    SubmitBtnAtom,
    SocialBtnAtom,
    AuthBgAtom,
    AuthTitleAtom,
    AuthDescriptionAtom,
    OptionLinkAtom,
    NavbarIconAtom,
    searchNavtopAtom,
    MenuNavtopAtom,
    MenuNavleftAtom,
    InputFormProfileAtom,
    imgProfileAtom,
    ChangephotoProfileAtom,
    WrtMenuBtnAtom,
    WrtBookImgAtom,
    WrtTitleAtom,
    WrtInfoBookAtom,
    WrtSocialMenuAtom,
    WrtEditerAtom,
    DetailInputFormAtom,
    DetailToogleFormAtom,
    DetailUploadImgAtom,
    DetailCmbFormAtom,
    DetailTextareaFormAtom,
    DetailUdPartAtom,
    ListTypeBookAtom,
    ListChapterBookAtom,
    ListUdBookAtom,
    ListSocialMenuAtom,
    ListSocialBtnAtom,
    DetailSocialMenuAtom,
    CreationSubmitBtnAtom,
    QuillModule,
    SelectAtom,
    SearchNavbarAtom,
    SearchBookAtom,
    LogoNolinkAtom,
    AuthBgMobileAtom,
    BarSeperateAtom,
    ExampleDialogAtom,
    PaginationAtom,
    RatingAtom,
    RdHomeIconRatingAtom,
    RdHomeTabBookAtom,
    RdHomeTabCategoryAtom,
    RdListPublicationDateAtom,
    ExcerptAtom,
    ImgMAtom,
    BaseBtnAtom,
    AuthorAtom,
    DefaultCoverAtom,
    NgImageSliderModule,
    NavLinkAtom,
    DropdownLinkAtom,
    BreadcrumbLinkAtom,
    IconTextAtom,
    DetailInfoLineAtom,
    RoundBtnAtom,
    DetailImageAtom,
    IconTextButtonAtom,
    LabelUnderlineAtom,
    IconBtnAtom,
    ReviewActionAtom,
    ReviewInputAtom,
    SearchBtnAtom,
    ChapterPriceAtom,
    NavbarAuthBtnAtom,
    NavbarBtnLoggedAtom,
    CircleImageAtom,
    SliderAtom,
    TitleAtom,
    TextLinkAtom,
    TitleBookAtom,
    RdListTabPageAtom,
    BtnSwitchChapterAtom,
    BtnSelectAtom,
    BtnBackToTopAtom,
    PopupCoverHeaderAtom,
    ProcessBarAtom,
    BtnInputFileAtom,
    LinkAtom,
    DetailInfoLineLinkAtom,
    NavItemAtom,
  ],
  declarations: [
    TabBtnAtom,
    LogoAtom,
    InputFormAtom,
    CheckBtnAtom,
    SubmitBtnAtom,
    SocialBtnAtom,
    AuthBgAtom,
    AuthTitleAtom,
    AuthDescriptionAtom,
    OptionLinkAtom,
    NavbarIconAtom,
    searchNavtopAtom,
    MenuNavtopAtom,
    MenuNavleftAtom,
    InputFormProfileAtom,
    imgProfileAtom,
    ChangephotoProfileAtom,
    WrtMenuBtnAtom,
    WrtBookImgAtom,
    WrtTitleAtom,
    WrtInfoBookAtom,
    WrtSocialMenuAtom,
    WrtEditerAtom,
    DetailInputFormAtom,
    DetailToogleFormAtom,
    DetailUploadImgAtom,
    DetailCmbFormAtom,
    DetailTextareaFormAtom,
    DetailUdPartAtom,
    ListTypeBookAtom,
    ListChapterBookAtom,
    ListUdBookAtom,
    ListSocialMenuAtom,
    ListSocialBtnAtom,
    DetailSocialMenuAtom,
    CreationSubmitBtnAtom,
    SelectAtom,
    SearchNavbarAtom,
    SearchBookAtom,
    LogoNolinkAtom,
    AuthBgMobileAtom,
    BarSeperateAtom,
    ExampleDialogAtom,
    PaginationAtom,
    RatingAtom,
    RdHomeIconRatingAtom,
    RdHomeTabBookAtom,
    RdHomeTabCategoryAtom,
    RdListPublicationDateAtom,
    ExcerptAtom,
    ImgMAtom,
    BaseBtnAtom,
    AuthorAtom,
    DefaultCoverAtom,
    NavLinkAtom,
    DropdownLinkAtom,
    BreadcrumbLinkAtom,
    IconTextAtom,
    DetailInfoLineAtom,
    RoundBtnAtom,
    DetailImageAtom,
    IconTextButtonAtom,
    LabelUnderlineAtom,
    IconBtnAtom,
    ReviewActionAtom,
    ReviewInputAtom,
    SearchBtnAtom,
    ChapterPriceAtom,
    NavbarAuthBtnAtom,
    NavbarBtnLoggedAtom,
    CircleImageAtom,
    SliderAtom,
    TitleAtom,
    TextLinkAtom,
    TitleBookAtom,
    RdListTabPageAtom,
    BtnSwitchChapterAtom,
    BtnSelectAtom,
    BtnBackToTopAtom,
    PopupCoverHeaderAtom,
    ProcessBarAtom,
    BtnInputFileAtom,
    LinkAtom,
    DetailInfoLineLinkAtom,
    NavItemAtom,
  ],
})
export class GlobalDesignSystemAtomicModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
import { SocialBtnAtom } from './atoms/social-btn/social-btn.atom';
import { WrtBgAtom } from './atoms/wrt-bg/wrt-bg.atom';
import { WrtMenuBtnAtom } from './atoms/wrt-menu-btn/wrt-menu-btn.atom';
import { WrtBookImgAtom } from './atoms/wrt-book-img/wrt-book-img.atom';
import { WrtTitleAtom } from './atoms/wrt-title/wrt-title.atom';
import { WrtHeadMolec } from './molecs/wrt-head/wrt-head.molec';
import { WrtWriterMolec } from './molecs/wrt-writer/wrt-writer.molec';
import { WrtInfoBookAtom } from './atoms/wrt-info-book/wrt-info-book.atom';
import { SubmitBtnAtom } from './atoms/submit-btn/submit-btn.atom';
import { WritingOrgan } from './organs/writing/writing.organ';
import { WritingTemplate } from './templates/writing/writing.template';
import { WrtSocialMenuAtom } from './atoms/wrt-social-menu/wrt-social-menu.atom';
import { DetailTabHeadMolec } from './molecs/detail-tab-head/detail-tab-head.molec';
import { DetailActionBtnsMolec } from './molecs/detail-action-btns/detail-action-btns.molec';
import { DetailInputFormAtom } from './atoms/detail-input-form/detail-input-form.atom';
import { DetailToogleFormAtom } from './atoms/detail-toogle-form/detail-toogle-form.atom';
import { DetailUploadImgAtom } from './atoms/detail-upload-img/detail-upload-img.atom';
import { DetailFormMolec } from './molecs/detail-form/detail-form.molec';
import { DetailUploadFormMolec } from './molecs/detail-upload-form/detail-upload-form.molec';
import { DetailBookFormMolec } from './molecs/detail-book-form/detail-book-form.molec';
import { WrtEditerAtom } from './atoms/wrt-editer/wrt-editer.atom';
import { DetailCmbFormAtom } from './atoms/detail-cmb-form/detail-cmb-form.atom';
import { DetailOrgan } from './organs/detail/detail.organ';
import { IndexOrgan } from './organs/index/index.organ';
import { DetailIndexTemplate } from './templates/detail-index/detail-index.template';
import { DetailTextareaFormAtom } from './atoms/detail-textarea-form/detail-textarea-form.atom';
import { GenresFieldModule } from '@awread/global/packages';
import { DetailLinkBtnsMolec } from './molecs/detail-link-btns/detail-link-btns.molec';
import { DetailRatingAtom } from './atoms/detail-rating/detail-rating.atom';
import { DetailInfoBookAtom } from './atoms/detail-info-book/detail-info-book.atom';
import { SocialMenuAtom } from './atoms/social-menu/social-menu.atom';
import { ListHeadMolec } from './molecs/list-head/list-head.molec';
import { ListTitleColAtom } from './atoms/list-title-col/list-title-col.atom';
import { ListImgBookAtom } from './atoms/list-img-book/list-img-book.atom';
import { ListReviewBookAtom } from './atoms/list-review-book/list-review-book.atom';
import { ListTypeBookAtom } from './atoms/list-type-book/list-type-book.atom';
import { ListRatingBookAtom } from './atoms/list-rating-book/list-rating-book.atom';
import { ListChapterBookAtom } from './atoms/list-chapter-book/list-chapter-book.atom';
import { ListUdBookAtom } from './atoms/list-ud-book/list-ud-book.atom';
import { ListSocialMenuAtom } from './atoms/list-social-menu/list-social-menu.atom';
import { ListSocialBtnAtom } from './atoms/list-social-btn/list-social-btn.atom';
import { ListActMolec } from './molecs/list-act/list-act.molec';
import { ListChapterMolec } from './molecs/list-chapter/list-chapter.molec';
import { ListStoriesMolec } from './molecs/list-stories/list-stories.molec';
import { ListTemplate } from './templates/list/list.template';
import { ListOrgan } from './organs/list/list.organ';

@NgModule({
    imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule, GenresFieldModule],
  exports: [CommonModule, SocialBtnAtom, WrtBgAtom, WrtMenuBtnAtom, WrtBookImgAtom, WrtTitleAtom, WrtHeadMolec, WrtWriterMolec, WrtInfoBookAtom, SubmitBtnAtom, WritingOrgan, WritingTemplate, WrtSocialMenuAtom, DetailTabHeadMolec, DetailActionBtnsMolec, DetailInputFormAtom, DetailToogleFormAtom, DetailUploadImgAtom, DetailFormMolec, DetailUploadFormMolec, DetailBookFormMolec, WrtEditerAtom, DetailCmbFormAtom, DetailOrgan, IndexOrgan, DetailIndexTemplate, DetailTextareaFormAtom, GenresFieldModule, DetailLinkBtnsMolec, DetailRatingAtom, DetailInfoBookAtom, SocialMenuAtom, ListHeadMolec, ListTitleColAtom, ListImgBookAtom, ListReviewBookAtom, ListTypeBookAtom, ListRatingBookAtom, ListChapterBookAtom, ListUdBookAtom, ListSocialMenuAtom, ListSocialBtnAtom, ListActMolec, ListChapterMolec, ListStoriesMolec, ListTemplate, ListOrgan],
  declarations: [SocialBtnAtom, WrtBgAtom, WrtMenuBtnAtom, WrtBookImgAtom, WrtTitleAtom, WrtHeadMolec, WrtWriterMolec, WrtInfoBookAtom, SubmitBtnAtom, WritingOrgan, WritingTemplate, WrtSocialMenuAtom, DetailTabHeadMolec, DetailActionBtnsMolec, DetailInputFormAtom, DetailToogleFormAtom, DetailUploadImgAtom, DetailFormMolec, DetailUploadFormMolec, DetailBookFormMolec, WrtEditerAtom, DetailCmbFormAtom, DetailOrgan, IndexOrgan, DetailIndexTemplate, DetailTextareaFormAtom, DetailLinkBtnsMolec, DetailRatingAtom, DetailInfoBookAtom, SocialMenuAtom, ListHeadMolec, ListTitleColAtom, ListImgBookAtom, ListReviewBookAtom, ListTypeBookAtom, ListRatingBookAtom, ListChapterBookAtom, ListUdBookAtom, ListSocialMenuAtom, ListSocialBtnAtom, ListActMolec, ListChapterMolec, ListStoriesMolec, ListTemplate, ListOrgan]
})
export class WriterWebUiCreationAtomicModule {}

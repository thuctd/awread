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

@NgModule({
    imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule, GenresFieldModule],
  exports: [CommonModule, SocialBtnAtom, WrtBgAtom, WrtMenuBtnAtom, WrtBookImgAtom, WrtTitleAtom, WrtHeadMolec, WrtWriterMolec, WrtInfoBookAtom, SubmitBtnAtom, WritingOrgan, WritingTemplate, WrtSocialMenuAtom, DetailTabHeadMolec, DetailActionBtnsMolec, DetailInputFormAtom, DetailToogleFormAtom, DetailUploadImgAtom, DetailFormMolec, DetailUploadFormMolec, DetailBookFormMolec, WrtEditerAtom, DetailCmbFormAtom, DetailOrgan, IndexOrgan, DetailIndexTemplate, DetailTextareaFormAtom, GenresFieldModule],
  declarations: [SocialBtnAtom, WrtBgAtom, WrtMenuBtnAtom, WrtBookImgAtom, WrtTitleAtom, WrtHeadMolec, WrtWriterMolec, WrtInfoBookAtom, SubmitBtnAtom, WritingOrgan, WritingTemplate, WrtSocialMenuAtom, DetailTabHeadMolec, DetailActionBtnsMolec, DetailInputFormAtom, DetailToogleFormAtom, DetailUploadImgAtom, DetailFormMolec, DetailUploadFormMolec, DetailBookFormMolec, WrtEditerAtom, DetailCmbFormAtom, DetailOrgan, IndexOrgan, DetailIndexTemplate, DetailTextareaFormAtom]
})
export class WriterWebUiCreationAtomicModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
import { WrtWritingHeadMolec } from './molecs/wrt-writing-head/wrt-writing-head.molec';
import { WrtWritingContentMolec } from './molecs/wrt-writing-content/wrt-writing-content.molec';
import { WrtWritingOrgan } from './organs/wrt-writing/wrt-writing.organ';
import { WrtWritingTemplate } from './templates/wrt-writing/wrt-writing.template';
import { DetailTabHeadMolec } from './molecs/detail-tab-head/detail-tab-head.molec';
import { DetailActionBtnsMolec } from './molecs/detail-action-btns/detail-action-btns.molec';
import { DetailUploadFormMolec } from './molecs/detail-upload-form/detail-upload-form.molec';
import { DetailBookFormMolec } from './molecs/detail-book-form/detail-book-form.molec';
import { DetailOrgan } from './organs/detail/detail.organ';
import { IndexOrgan } from './organs/index/index.organ';
import { DetailIndexTemplate } from './templates/detail-index/detail-index.template';
import { DetailLinkBtnsMolec } from './molecs/detail-link-btns/detail-link-btns.molec';
import { WrtListActMolec } from './molecs/wrt-list-act/wrt-list-act.molec';
import { WrtListChapterMolec } from './molecs/wrt-list-chapter/wrt-list-chapter.molec';
import { WrtListStoriesMolec } from './molecs/wrt-list-stories/wrt-list-stories.molec';
import { WrtListHeadMolec } from './molecs/wrt-list-head/wrt-list-head.molec';
import { WrtListTemplate } from './templates/wrt-list/wrt-list.template';
import { WrtListOrgan } from './organs/wrt-list/wrt-list.organ';
import { DetailActMolec } from './molecs/detail-act/detail-act.molec';
import { DetailPartMolec } from './molecs/detail-part/detail-part.molec';
import { DetailReviewMolec } from './molecs/detail-review/detail-review.molec';
import { WriterWebSharedAtomicModule } from '@awread/writer/web/shared';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgSelectModule } from '@ng-select/ng-select';
import { InfoBookMolec } from './molecs/info-book/info-book.molec';
import { DetailBookOrgan } from './organs/detail-book/detail-book.organ';
import { DetailBookTemplate } from './templates/detail-book/detail-book.template';
import { WrtWritingPopupReadTemplate } from './templates/wrt-writing-popup-read/wrt-writing-popup-read.template';
import { PopupEditCoverBookTemplate } from './templates/popup-edit-cover-book/popup-edit-cover-book.template';
import { GenresFieldModule, InfiniteScrollModule, LoaderModule } from '@awread/global/packages';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    StorybookSupportModule,
    GlobalDesignSystemAtomicModule,
    GenresFieldModule,
    InfiniteScrollModule,
    WriterWebSharedAtomicModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    NgSelectModule,
    LoaderModule,
    MatDialogModule,
  ],
  exports: [
    MatDialogModule,
    CommonModule,
    WrtWritingHeadMolec,
    WrtWritingContentMolec,
    WrtWritingOrgan,
    WrtWritingTemplate,
    DetailTabHeadMolec,
    DetailActionBtnsMolec,
    DetailUploadFormMolec,
    DetailBookFormMolec,
    DetailOrgan,
    IndexOrgan,
    DetailIndexTemplate,
    GenresFieldModule,
    DetailLinkBtnsMolec,
    WrtListHeadMolec,
    WrtListActMolec,
    WrtListChapterMolec,
    WrtListStoriesMolec,
    WrtListTemplate,
    WrtListOrgan,
    DetailActMolec,
    DetailPartMolec,
    DetailReviewMolec,
    NgSelectModule,
    LoaderModule,
    InfoBookMolec,
    DetailBookOrgan,
    DetailBookTemplate,
    WrtWritingPopupReadTemplate,
    PopupEditCoverBookTemplate,
  ],
  declarations: [
    WrtWritingHeadMolec,
    WrtWritingContentMolec,
    WrtWritingOrgan,
    WrtWritingTemplate,
    DetailTabHeadMolec,
    DetailActionBtnsMolec,
    DetailUploadFormMolec,
    DetailBookFormMolec,
    DetailOrgan,
    IndexOrgan,
    DetailIndexTemplate,
    DetailLinkBtnsMolec,
    WrtListHeadMolec,
    WrtListActMolec,
    WrtListChapterMolec,
    WrtListStoriesMolec,
    WrtListTemplate,
    WrtListOrgan,
    DetailActMolec,
    DetailPartMolec,
    DetailReviewMolec,
    InfoBookMolec,
    DetailBookOrgan,
    DetailBookTemplate,
    WrtWritingPopupReadTemplate,
    PopupEditCoverBookTemplate,
  ],
})
export class WriterWebUiCreationAtomicModule {}

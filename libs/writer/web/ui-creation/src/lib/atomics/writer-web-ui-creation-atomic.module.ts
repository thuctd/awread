import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
import { WrtDetailTabHeadMolec } from './molecs/wrt-detail-tab-head/wrt-detail-tab-head.molec';
import { WrtDetailUploadFormMolec } from './molecs/wrt-detail-upload-form/wrt-detail-upload-form.molec';
import { WrtDetailBookFormMolec } from './molecs/wrt-detail-book-form/wrt-detail-book-form.molec';
import { WrtDetailOrgan } from './organs/wrt-detail/wrt-detail.organ';
import { WrtIndexOrgan } from './organs/wrt-index/wrt-index.organ';
import { WrtDetailIndexTemplate } from './templates/wrt-detail-index/wrt-detail-index.template';
import { WrtDetailLinkBtnsMolec } from './molecs/wrt-detail-link-btns/wrt-detail-link-btns.molec';
import { WrtDetailActMolec } from './molecs/wrt-detail-act/wrt-detail-act.molec';
import { WrtDetailPartMolec } from './molecs/wrt-detail-part/wrt-detail-part.molec';
import { WrtDetailReviewMolec } from './molecs/wrt-detail-review/wrt-detail-review.molec';
import { WrtWritingHeadMolec } from './molecs/wrt-writing-head/wrt-writing-head.molec';
import { WrtWritingContentMolec } from './molecs/wrt-writing-content/wrt-writing-content.molec';
import { WrtWritingOrgan } from './organs/wrt-writing/wrt-writing.organ';
import { WrtWritingTemplate } from './templates/wrt-writing/wrt-writing.template';
import { WrtListActMolec } from './molecs/wrt-list-act/wrt-list-act.molec';
import { WrtListChapterMolec } from './molecs/wrt-list-chapter/wrt-list-chapter.molec';
import { WrtListStoriesMolec } from './molecs/wrt-list-stories/wrt-list-stories.molec';
import { WrtListHeadMolec } from './molecs/wrt-list-head/wrt-list-head.molec';
import { WrtListTemplate } from './templates/wrt-list/wrt-list.template';
import { WrtListOrgan } from './organs/wrt-list/wrt-list.organ';
import { WriterWebSharedAtomicModule } from '@awread/writer/web/shared';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgSelectModule } from '@ng-select/ng-select';
import { InfoBookMolec } from './molecs/info-book/info-book.molec';
import { WrtDetailPopupBookOrgan } from './organs/wrt-detail-popup-book/wrt-detail-popup-book.organ';
import { WrtDetailPopupBookTemplate } from './templates/wrt-detail-popup-book/wrt-detail-popup-book.template';
import { WrtWritingPopupReadTemplate } from './templates/wrt-writing-popup-read/wrt-writing-popup-read.template';
import { PopupEditCoverBookTemplate } from './templates/popup-edit-cover-book/popup-edit-cover-book.template';
import { MatDialogModule } from '@angular/material/dialog';
import { GenresFieldModule, InfiniteScrollModule, LoaderModule } from '@awread/global/packages';

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
    WrtDetailTabHeadMolec,
    WrtDetailUploadFormMolec,
    WrtDetailBookFormMolec,
    WrtDetailOrgan,
    WrtIndexOrgan,
    WrtDetailIndexTemplate,
    WrtDetailLinkBtnsMolec,
    WrtDetailActMolec,
    WrtDetailPartMolec,
    WrtDetailReviewMolec,
    NgSelectModule,
    InfoBookMolec,
    WrtDetailPopupBookOrgan,
    WrtDetailPopupBookTemplate,
    PopupEditCoverBookTemplate,
  ],
  declarations: [
    WrtDetailTabHeadMolec,
    WrtDetailUploadFormMolec,
    WrtDetailBookFormMolec,
    WrtDetailOrgan,
    WrtIndexOrgan,
    WrtDetailIndexTemplate,
    WrtDetailLinkBtnsMolec,
    WrtDetailActMolec,
    WrtDetailPartMolec,
    WrtDetailReviewMolec,
    InfoBookMolec,
    WrtDetailPopupBookOrgan,
    WrtDetailPopupBookTemplate,
    WrtWritingHeadMolec,
    WrtWritingContentMolec,
    WrtWritingOrgan,
    WrtWritingTemplate,
    WrtListHeadMolec,
    WrtListActMolec,
    WrtListChapterMolec,
    WrtListStoriesMolec,
    WrtListTemplate,
    WrtListOrgan,
    InfoBookMolec,
    WrtWritingPopupReadTemplate,
    PopupEditCoverBookTemplate,
    WrtWritingHeadMolec,
    WrtWritingContentMolec,
    WrtWritingOrgan,
    WrtWritingTemplate,
    WrtListHeadMolec,
    WrtListActMolec,
    WrtListChapterMolec,
    WrtListStoriesMolec,
    WrtListTemplate,
    WrtListOrgan,
    InfoBookMolec,
    WrtWritingPopupReadTemplate,
    PopupEditCoverBookTemplate,
  ],
})
export class WriterWebUiCreationAtomicModule {}

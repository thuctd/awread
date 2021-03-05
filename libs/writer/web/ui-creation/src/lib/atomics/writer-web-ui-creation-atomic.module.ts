import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
import { WrtHeadMolec } from './molecs/wrt-head/wrt-head.molec';
import { WrtWriterMolec } from './molecs/wrt-writer/wrt-writer.molec';
import { WritingOrgan } from './organs/writing/writing.organ';
import { WritingTemplate } from './templates/writing/writing.template';
import { WrtDetailTabHeadMolec } from './molecs/wrt-detail-tab-head/wrt-detail-tab-head.molec';
import { WrtDetailUploadFormMolec } from './molecs/wrt-detail-upload-form/wrt-detail-upload-form.molec';
import { WrtDetailBookFormMolec } from './molecs/wrt-detail-book-form/wrt-detail-book-form.molec';
import { WrtDetailOrgan } from './organs/wrt-detail/wrt-detail.organ';
import { WrtIndexOrgan } from './organs/wrt-index/wrt-index.organ';
import { WrtDetailIndexTemplate } from './templates/wrt-detail-index/wrt-detail-index.template';
import { WrtDetailLinkBtnsMolec } from './molecs/wrt-detail-link-btns/wrt-detail-link-btns.molec';
import { ListActMolec } from './molecs/list-act/list-act.molec';
import { ListChapterMolec } from './molecs/list-chapter/list-chapter.molec';
import { ListStoriesMolec } from './molecs/list-stories/list-stories.molec';
import { ListHeadMolec } from './molecs/list-head/list-head.molec';
import { ListTemplate } from './templates/list/list.template';
import { ListOrgan } from './organs/list/list.organ';
import { WrtDetailActMolec } from './molecs/wrt-detail-act/wrt-detail-act.molec';
import { WrtDetailPartMolec } from './molecs/wrt-detail-part/wrt-detail-part.molec';
import { WrtDetailReviewMolec } from './molecs/wrt-detail-review/wrt-detail-review.molec';
import { WriterWebSharedAtomicModule } from '@awread/writer/web/shared';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgSelectModule } from '@ng-select/ng-select';
import { InfoBookMolec } from './molecs/info-book/info-book.molec';
import { WrtDetailPopupBookOrgan } from './organs/wrt-detail-popup-book/wrt-detail-popup-book.organ';
import { WrtDetailPopupBookTemplate } from './templates/wrt-detail-popup-book/wrt-detail-popup-book.template';
import { ReadTemplate } from './templates/read/read.template';
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
    WrtHeadMolec,
    WrtWriterMolec,
    WritingOrgan,
    WritingTemplate,
    WrtDetailTabHeadMolec,
    WrtDetailUploadFormMolec,
    WrtDetailBookFormMolec,
    WrtDetailOrgan,
    WrtIndexOrgan,
    WrtDetailIndexTemplate,
    GenresFieldModule,
    WrtDetailLinkBtnsMolec,
    ListHeadMolec,
    ListActMolec,
    ListChapterMolec,
    ListStoriesMolec,
    ListTemplate,
    ListOrgan,
    WrtDetailActMolec,
    WrtDetailPartMolec,
    WrtDetailReviewMolec,
    NgSelectModule,
    LoaderModule,
    InfoBookMolec,
    WrtDetailPopupBookOrgan,
    WrtDetailPopupBookTemplate,
    ReadTemplate,
    PopupEditCoverBookTemplate,
  ],
  declarations: [
    WrtHeadMolec,
    WrtWriterMolec,
    WritingOrgan,
    WritingTemplate,
    WrtDetailTabHeadMolec,
    WrtDetailUploadFormMolec,
    WrtDetailBookFormMolec,
    WrtDetailOrgan,
    WrtIndexOrgan,
    WrtDetailIndexTemplate,
    WrtDetailLinkBtnsMolec,
    ListHeadMolec,
    ListActMolec,
    ListChapterMolec,
    ListStoriesMolec,
    ListTemplate,
    ListOrgan,
    WrtDetailActMolec,
    WrtDetailPartMolec,
    WrtDetailReviewMolec,
    InfoBookMolec,
    WrtDetailPopupBookOrgan,
    WrtDetailPopupBookTemplate,
    ReadTemplate,
    PopupEditCoverBookTemplate,
  ],
})
export class WriterWebUiCreationAtomicModule {}

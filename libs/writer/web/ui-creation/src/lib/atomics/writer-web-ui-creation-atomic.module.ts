import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  StorybookSupportModule,
  GlobalDesignSystemAtomicModule,
} from '@awread/global/design-system';
import { WrtHeadMolec } from './molecs/wrt-head/wrt-head.molec';
import { WrtWriterMolec } from './molecs/wrt-writer/wrt-writer.molec';
import { WritingOrgan } from './organs/writing/writing.organ';
import { WritingTemplate } from './templates/writing/writing.template';
import { DetailTabHeadMolec } from './molecs/detail-tab-head/detail-tab-head.molec';
import { DetailActionBtnsMolec } from './molecs/detail-action-btns/detail-action-btns.molec';
import { DetailUploadFormMolec } from './molecs/detail-upload-form/detail-upload-form.molec';
import { DetailBookFormMolec } from './molecs/detail-book-form/detail-book-form.molec';
import { DetailOrgan } from './organs/detail/detail.organ';
import { IndexOrgan } from './organs/index/index.organ';
import { DetailIndexTemplate } from './templates/detail-index/detail-index.template';
import {
  GenresFieldModule,
  InfiniteScrollModule,
  LoaderModule,
} from '@awread/global/packages';
import { DetailLinkBtnsMolec } from './molecs/detail-link-btns/detail-link-btns.molec';
import { ListActMolec } from './molecs/list-act/list-act.molec';
import { ListChapterMolec } from './molecs/list-chapter/list-chapter.molec';
import { ListStoriesMolec } from './molecs/list-stories/list-stories.molec';
import { ListHeadMolec } from './molecs/list-head/list-head.molec';
import { ListTemplate } from './templates/list/list.template';
import { ListOrgan } from './organs/list/list.organ';
import { DetailActMolec } from './molecs/detail-act/detail-act.molec';
import { DetailPartMolec } from './molecs/detail-part/detail-part.molec';
import { DetailReviewMolec } from './molecs/detail-review/detail-review.molec';
import { WriterWebSharedAtomicModule } from '@awread/writer/web/shared';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgSelectModule } from '@ng-select/ng-select';

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
  ],
  exports: [
    CommonModule,
    WrtHeadMolec,
    WrtWriterMolec,
    WritingOrgan,
    WritingTemplate,
    DetailTabHeadMolec,
    DetailActionBtnsMolec,
    DetailUploadFormMolec,
    DetailBookFormMolec,
    DetailOrgan,
    IndexOrgan,
    DetailIndexTemplate,
    GenresFieldModule,
    DetailLinkBtnsMolec,
    ListHeadMolec,
    ListActMolec,
    ListChapterMolec,
    ListStoriesMolec,
    ListTemplate,
    ListOrgan,
    DetailActMolec,
    DetailPartMolec,
    DetailReviewMolec,
    NgSelectModule,
    LoaderModule,
  ],
  declarations: [
    WrtHeadMolec,
    WrtWriterMolec,
    WritingOrgan,
    WritingTemplate,
    DetailTabHeadMolec,
    DetailActionBtnsMolec,
    DetailUploadFormMolec,
    DetailBookFormMolec,
    DetailOrgan,
    IndexOrgan,
    DetailIndexTemplate,
    DetailLinkBtnsMolec,
    ListHeadMolec,
    ListActMolec,
    ListChapterMolec,
    ListStoriesMolec,
    ListTemplate,
    ListOrgan,
    DetailActMolec,
    DetailPartMolec,
    DetailReviewMolec,
  ],
})
export class WriterWebUiCreationAtomicModule {}

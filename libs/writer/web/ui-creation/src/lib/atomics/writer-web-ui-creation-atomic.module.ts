import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
import { WrtDetailTabHeadMolec } from './molecs/wrt-detail-tab-head/wrt-detail-tab-head.molec';
import { WrtDetailUploadImgMolec } from './molecs/wrt-detail-upload-img/wrt-detail-upload-img.molec';
import { WrtDetailBookFormMolec } from './molecs/wrt-detail-book-form/wrt-detail-book-form.molec';
import { WrtDetailLinkBtnsMolec } from './molecs/wrt-detail-link-btns/wrt-detail-link-btns.molec';
import { WrtWritingHeadMolec } from './molecs/wrt-writing-head/wrt-writing-head.molec';
import { WrtWritingContentMolec } from './molecs/wrt-writing-content/wrt-writing-content.molec';
import { WrtChapterWritingOrgan } from './organs/wrt-chapter-writing/wrt-chapter-writing.organ';
import { WrtBooksListOrgan } from './organs/wrt-books-list/wrt-books-list.organ';
import { WriterWebSharedAtomicModule } from '@awread/writer/web/shared';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { InfoBookMolec } from './molecs/info-book/info-book.molec';
import { WrtDetailPopupBookOrgan } from './organs/wrt-detail-popup-book/wrt-detail-popup-book.organ';
import { WrtDetailPopupBookTemplate } from './templates/wrt-detail-popup-book/wrt-detail-popup-book.template';
import { WrtWritingPopupReadTemplate } from './templates/wrt-writing-popup-read/wrt-writing-popup-read.template';
import { MatDialogModule } from '@angular/material/dialog';
import { GenresFieldModule, InfiniteScrollModule, LoaderModule } from '@awread/global/packages';
import { CoreCategoriesModule } from '@awread/core/categories';
import { WrtBooksListTemplate } from './templates/wrt-books-list/wrt-books-list.template';
import { WrtBookDetailTabTemplate } from './templates/wrt-book-detail-tab/wrt-book-detail-tab.template';
import { WrtBookTocTabTemplate } from './templates/wrt-book-toc-tab/wrt-book-toc-tab.template';
import { WrtBookDetailTabOrgan } from './organs/wrt-book-detail-tab/wrt-book-detail-tab.organ';
import { WrtBookTocTabOrgan } from './organs/wrt-book-toc-tab/wrt-book-toc-tab.organ';
import { WrtChapterWritingTemplate } from './templates/wrt-chapter-writing/wrt-chapter-writing.template';
import { WrtDetailTocChapterInfoMolec } from './molecs/wrt-detail-toc-chapter-info/wrt-detail-toc-chapter-info.molec';
import { WrtDetailTocChapterReviewMolec } from './molecs/wrt-detail-toc-chapter-review/wrt-detail-toc-chapter-review.molec';
import { WrtDetailTocChapterActMolec } from './molecs/wrt-detail-toc-chapter-act/wrt-detail-toc-chapter-act.molec';
import { WrtBookListInfoMolec } from './molecs/wrt-book-list-info/wrt-book-list-info.molec';
import { WrtBookListChapterMolec } from './molecs/wrt-book-list-chapter/wrt-book-list-chapter.molec';
import { WrtBookListActMolec } from './molecs/wrt-book-list-act/wrt-book-list-act.molec';
import { WrtBookListHeadMolec } from './molecs/wrt-book-list-head/wrt-book-list-head.molec';
import { WrtDetailChapterItemMolec } from './molecs/wrt-detail-chapter-item/wrt-detail-chapter-item.molec';
import { CoreBooksModule } from '@awread/core/books';
@NgModule({
  imports: [
    CoreBooksModule,
    CommonModule,
    StorybookSupportModule,
    GlobalDesignSystemAtomicModule,
    GenresFieldModule,
    InfiniteScrollModule,
    WriterWebSharedAtomicModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    LoaderModule,
    MatDialogModule,
    CoreCategoriesModule,
  ],
  exports: [
    CoreBooksModule,
    MatDialogModule,
    CommonModule,
    WrtDetailTabHeadMolec,
    WrtDetailUploadImgMolec,
    WrtDetailBookFormMolec,
    WrtDetailLinkBtnsMolec,
    InfoBookMolec,
    WrtDetailPopupBookOrgan,
    WrtDetailPopupBookTemplate,
    WrtWritingHeadMolec,
    WrtWritingContentMolec,
    WrtChapterWritingOrgan,
    WrtBooksListOrgan,
    WrtWritingPopupReadTemplate,
    WrtBooksListTemplate,
    WrtBookDetailTabTemplate,
    WrtBookTocTabTemplate,
    WrtBookDetailTabOrgan,
    WrtBookTocTabOrgan,
    WrtChapterWritingTemplate,
    WrtDetailTocChapterInfoMolec,
    WrtDetailTocChapterReviewMolec,
    WrtDetailTocChapterActMolec,
    WrtBookListInfoMolec,
    WrtBookListChapterMolec,
    WrtBookListActMolec,
    WrtBookListHeadMolec,
    WrtDetailChapterItemMolec,
  ],
  declarations: [
    WrtDetailTabHeadMolec,
    WrtDetailUploadImgMolec,
    WrtDetailBookFormMolec,
    WrtDetailLinkBtnsMolec,
    InfoBookMolec,
    WrtDetailPopupBookOrgan,
    WrtDetailPopupBookTemplate,
    WrtWritingHeadMolec,
    WrtWritingContentMolec,
    WrtChapterWritingOrgan,
    WrtBooksListOrgan,
    WrtWritingPopupReadTemplate,
    WrtBooksListTemplate,
    WrtChapterWritingOrgan,
    WrtBookDetailTabTemplate,
    WrtBookTocTabTemplate,
    WrtBookDetailTabOrgan,
    WrtBookTocTabOrgan,
    WrtChapterWritingTemplate,
    WrtDetailTocChapterInfoMolec,
    WrtDetailTocChapterReviewMolec,
    WrtDetailTocChapterActMolec,
    WrtBookListInfoMolec,
    WrtBookListChapterMolec,
    WrtBookListActMolec,
    WrtBookListHeadMolec,
    WrtDetailChapterItemMolec,
  ],
})
export class WriterWebUiCreationAtomicModule { }

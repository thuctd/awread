import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalDesignSystemAtomicModule, StorybookSupportModule } from '@awread/global/design-system';
import { ReaderWebUiAuthorAtomicModule } from '@awread/reader/web/ui-author';
import { ListInfoLongBookMolec } from './molecs/list-info-long-book/list-info-long-book.molec';
import { ListInfoProseMolec } from './molecs/list-info-prose/list-info-prose.molec';
import { ListInfoShortBookMolec } from './molecs/list-info-short-book/list-info-short-book.molec';
import { ListInfoTopBookMolec } from './molecs/list-info-top-book/list-info-top-book.molec';
import { ListDetailLongBookOrgan } from './organs/list-detail-long-book/list-detail-long-book.organ';
import { ListDetailShortBookOrgan } from './organs/list-detail-short-book/list-detail-short-book.organ';
import { ListDetailProseOrgan } from './organs/list-detail-prose/list-detail-prose.organ';
import { ListDetailTopBookOrgan } from './organs/list-detail-top-book/list-detail-top-book.organ';
import { ListTemplate } from './templates/list/list.template';
import { HomeTemplate } from './templates/home/home.template';
import { HomeTagsOrgan } from './organs/home-tags/home-tags.organ';
import { HomeInfoBookFeaturedMolec } from './molecs/home-info-book-featured/home-info-book-featured.molec';
import { HomeInfoBookReviewMolec } from './molecs/home-info-book-review/home-info-book-review.molec';
import { HomeInfoBookUpdateMolec } from './molecs/home-info-book-update/home-info-book-update.molec';
import { HomeDetailBookFeaturedOrgan } from './organs/home-detail-book-featured/home-detail-book-featured.organ';
import { HomeDetailBookReviewOrgan } from './organs/home-detail-book-review/home-detail-book-review.organ';
import { HomeDetailBookUpdateOrgan } from './organs/home-detail-book-update/home-detail-book-update.organ';
import { ReviewItemMolec } from './molecs/review-item/review-item.molec';
import { ChapterItemMolec } from './molecs/chapter-item/chapter-item.molec';
import { DetailBookInfoMolec } from './molecs/detail-book-info/detail-book-info.molec';
import { DetailBookInfoActionsMolec } from './molecs/detail-book-info-actions/detail-book-info-actions.molec';
import { DetailBookInfoRatingMolec } from './molecs/detail-book-info-rating/detail-book-info-rating.molec';
import { DetailBookOptionButtonsMolec } from './molecs/detail-book-option-buttons/detail-book-option-buttons.molec';
import { DetailBookContentOrgan } from './organs/detail-book-content/detail-book-content.organ';
import { DetailBookBookmarkDonateMolec } from './molecs/detail-book-bookmark-donate/detail-book-bookmark-donate.molec';
import { DetailBookTopOrgan } from './organs/detail-book-top/detail-book-top.organ';
import { DetailBookIntroduceMolec } from './molecs/detail-book-introduce/detail-book-introduce.molec';
import { DetailBookChapterOrgan } from './organs/detail-book-chapter/detail-book-chapter.organ';
import { DetailBookReviewFormOrgan } from './organs/detail-book-review-form/detail-book-review-form.organ';
import { DetailBookReviewActionsMolec } from './molecs/detail-book-review-actions/detail-book-review-actions.molec';
import { DetailBookMainContentOrgan } from './organs/detail-book-main-content/detail-book-main-content.organ';
import { DetailBookReviewsOrgan } from './organs/detail-book-reviews/detail-book-reviews.organ';
import { DetailBookTemplate } from './templates/detail-book/detail-book.template';
import { SearchFormMolec } from './molecs/search-form/search-form.molec';
import { DetailBookSidebarOrgan } from './organs/detail-book-sidebar/detail-book-sidebar.organ';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeadReadBookMolec } from './molecs/head-read-book/head-read-book.molec';
import { FormCommentBookReadMolec } from './molecs/form-comment-book-read/form-comment-book-read.molec';
import { CommentBookReadOrgan } from './organs/comment-book-read/comment-book-read.organ';
import { ContentBookOrgan } from './organs/content-book/content-book.organ';
import { ReadTemplate } from './templates/read/read.template';
import { CommentOrgan } from './organs/comment/comment.organ';
import { CommentItemMolec } from './molecs/comment-item/comment-item.molec';
import { HomeListBookUpdateMobileOrgan } from './organs/home-list-book-update-mobile/home-list-book-update-mobile.organ';
import { HomeListBookFeaturedMobileOrgan } from './organs/home-list-book-featured-mobile/home-list-book-featured-mobile.organ';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeMobileTemplate } from './templates/home-mobile/home-mobile.template';
import { HomeListBookReviewMobileOrgan } from './organs/home-list-book-review-mobile/home-list-book-review-mobile.organ';
import { TitlePageMenuMolec } from './molecs/title-page-menu/title-page-menu.molec';
import { MbInfoBookMolec } from './molecs/mb-info-book/mb-info-book.molec';
import { MbDetailBookOrgan } from './organs/mb-list-detail-book/mb-list-detail-book.organ';
import { MbListTemplate } from './templates/mb-list/mb-list.template';
import { DetailBookMobileTemplate } from './templates/detail-book-mobile/detail-book-mobile.template';
import { ReadMobileTemplate } from './templates/read-mobile/read-mobile.template';
import { DetailBookTopMobileOrgan } from './organs/detail-book-top-mobile/detail-book-top-mobile.organ';
import { TabCategoriesMolec } from './molecs/tab-categories/tab-categories.molec';
import { InfoBookGridMolec } from './molecs/info-book-grid/info-book-grid.molec';
import { BooksGridOrgan } from './organs/books-grid/books-grid.organ';
import { RdSearchBookTemplate } from './templates/rd-search-book/rd-search-book.template';
import { RdSearchBookHeaderMolec } from './molecs/rd-search-book-header/rd-search-book-header.molec';
import { RdSearchBookTitleMolec } from './molecs/rd-search-book-title/rd-search-book-title.molec';
import { RdSearchBookListOrgan } from './organs/rd-search-book-list/rd-search-book-list.organ';
import { RdSearchBookMbTemplate } from './templates/rd-search-book-mb/rd-search-book-mb.template';
import { RdIntroductionFounderOrgan } from './organs/rd-introduction-founder/rd-introduction-founder.organ';
import { RdIntroductionAboutUsOrgan } from './organs/rd-introduction-aboutus/rd-introduction-aboutus.organ';
import { RdIntroductionInfomationAppOrgan } from './organs/rd-introduction-infomation-app/rd-introduction-infomation-app.organ';
import { RdIntroductionTemplate } from './templates/rd-introduction/rd-introduction.template';
import { RdIntroductionBoxHotlineMolec } from './molecs/rd-introduction-box-hotline/rd-introduction-box-hotline.molec';
import { RdIntroductionAboutusMolec } from './molecs/rd-introduction-aboutus/rd-introduction-aboutus.molec';
import { RdIntroductionTargetItemGridMolec } from './molecs/rd-introduction-target-item-grid/rd-introduction-target-item-grid.molec';
import { RdIntroductionTargetOrgan } from './organs/rd-introduction-target/rd-introduction-target.organ';
import { RdHomeBookUpdateTabMolec } from './molecs/rd-home-book-update-tab/rd-home-book-update-tab.molec';
import { RdHomeListBookUpdateMolec } from './molecs/rd-home-list-book-update/rd-home-list-book-update.molec';

@NgModule({
  imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule, CarouselModule, ReaderWebUiAuthorAtomicModule],
  exports: [
    ReaderWebUiAuthorAtomicModule,
    CommonModule,
    ListInfoLongBookMolec,
    ListInfoProseMolec,
    ListInfoShortBookMolec,
    ListInfoTopBookMolec,
    ListDetailLongBookOrgan,
    ListDetailShortBookOrgan,
    ListDetailProseOrgan,
    ListDetailTopBookOrgan,
    ListTemplate,
    HomeTemplate,
    HomeTagsOrgan,
    HomeInfoBookFeaturedMolec,
    HomeInfoBookReviewMolec,
    HomeInfoBookUpdateMolec,
    HomeDetailBookFeaturedOrgan,
    HomeDetailBookReviewOrgan,
    ReviewItemMolec,
    HomeDetailBookUpdateOrgan,
    ChapterItemMolec,
    DetailBookInfoMolec,
    DetailBookInfoActionsMolec,
    DetailBookInfoRatingMolec,
    DetailBookOptionButtonsMolec,
    DetailBookContentOrgan,
    DetailBookBookmarkDonateMolec,
    DetailBookTopOrgan,
    DetailBookIntroduceMolec,
    DetailBookChapterOrgan,
    DetailBookReviewFormOrgan,
    DetailBookReviewActionsMolec,
    DetailBookMainContentOrgan,
    DetailBookReviewsOrgan,
    DetailBookTemplate,
    DetailBookSidebarOrgan,
    SearchFormMolec,
    HeadReadBookMolec,
    FormCommentBookReadMolec,
    CommentBookReadOrgan,
    ContentBookOrgan,
    ReadTemplate,
    CommentOrgan,
    CommentItemMolec,
    HomeListBookUpdateMobileOrgan,
    HomeListBookFeaturedMobileOrgan,
    MatTabsModule,
    HomeMobileTemplate,
    HomeListBookReviewMobileOrgan,
    TitlePageMenuMolec,
    MbInfoBookMolec,
    MbDetailBookOrgan,
    MbListTemplate,
    DetailBookMobileTemplate,
    ReadMobileTemplate,
    DetailBookTopMobileOrgan,
    TabCategoriesMolec,
    InfoBookGridMolec,
    BooksGridOrgan,
    RdSearchBookTemplate,
    RdSearchBookHeaderMolec,
    RdSearchBookTitleMolec,
    RdSearchBookListOrgan,
    RdSearchBookMbTemplate,
    RdIntroductionFounderOrgan,
    RdIntroductionAboutUsOrgan,
    RdIntroductionInfomationAppOrgan,
    RdIntroductionTemplate,
    RdIntroductionBoxHotlineMolec,
    RdIntroductionAboutusMolec,
    RdIntroductionTargetItemGridMolec,
    RdIntroductionTargetOrgan,
    RdHomeBookUpdateTabMolec,
    RdHomeListBookUpdateMolec,
  ],
  declarations: [
    ListInfoLongBookMolec,
    ListInfoProseMolec,
    ListInfoShortBookMolec,
    ListInfoTopBookMolec,
    ListDetailLongBookOrgan,
    ListDetailShortBookOrgan,
    ListDetailProseOrgan,
    ListDetailTopBookOrgan,
    ListTemplate,
    HomeTemplate,
    HomeTagsOrgan,
    HomeInfoBookFeaturedMolec,
    HomeInfoBookReviewMolec,
    HomeInfoBookUpdateMolec,
    HomeDetailBookFeaturedOrgan,
    HomeDetailBookReviewOrgan,
    HomeDetailBookUpdateOrgan,
    ReviewItemMolec,
    ChapterItemMolec,
    DetailBookInfoMolec,
    DetailBookInfoActionsMolec,
    DetailBookInfoRatingMolec,
    DetailBookOptionButtonsMolec,
    DetailBookContentOrgan,
    DetailBookBookmarkDonateMolec,
    DetailBookTopOrgan,
    DetailBookIntroduceMolec,
    DetailBookChapterOrgan,
    DetailBookReviewFormOrgan,
    DetailBookReviewActionsMolec,
    DetailBookMainContentOrgan,
    DetailBookReviewsOrgan,
    DetailBookTemplate,
    DetailBookSidebarOrgan,
    SearchFormMolec,
    HeadReadBookMolec,
    FormCommentBookReadMolec,
    CommentBookReadOrgan,
    ContentBookOrgan,
    ReadTemplate,
    CommentOrgan,
    CommentItemMolec,
    HomeListBookUpdateMobileOrgan,
    HomeListBookFeaturedMobileOrgan,
    HomeMobileTemplate,
    HomeListBookReviewMobileOrgan,
    TitlePageMenuMolec,
    MbInfoBookMolec,
    MbDetailBookOrgan,
    MbListTemplate,
    DetailBookMobileTemplate,
    ReadMobileTemplate,
    DetailBookTopMobileOrgan,
    TabCategoriesMolec,
    InfoBookGridMolec,
    BooksGridOrgan,
    RdSearchBookTemplate,
    RdSearchBookHeaderMolec,
    RdSearchBookTitleMolec,
    RdSearchBookListOrgan,
    RdSearchBookMbTemplate,
    RdIntroductionFounderOrgan,
    RdIntroductionAboutUsOrgan,
    RdIntroductionInfomationAppOrgan,
    RdIntroductionTemplate,
    RdIntroductionBoxHotlineMolec,
    RdIntroductionAboutusMolec,
    RdIntroductionTargetItemGridMolec,
    RdIntroductionTargetOrgan,
    RdHomeBookUpdateTabMolec,
    RdHomeListBookUpdateMolec,
  ],
})
export class ReaderWebUiMarketAtomicModule {}

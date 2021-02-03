import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalDesignSystemAtomicModule, StorybookSupportModule } from '@awread/global/design-system';
import { TabCategoryMolec } from './molecs/tab-category/tab-category.molec';
import { TabBookMolec } from './molecs/tab-book/tab-book.molec';
import { TabPageMolec } from './molecs/tab-page/tab-page.molec';
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
import { BreadcrumbMolec } from './molecs/breadcrumb/breadcrumb.molec';
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
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeadReadBookMolec } from './molecs/head-read-book/head-read-book.molec';
import { FormCommentBookReadMolec } from './molecs/form-comment-book-read/form-comment-book-read.molec';
import { CommentBookReadOrgan } from './organs/comment-book-read/comment-book-read.organ';
import { ContentBookOrgan } from './organs/content-book/content-book.organ';
import { ReadTemplate } from './templates/read/read.template';
import { CommentOrgan } from './organs/comment/comment.organ';
import { CommentItemMolec } from './molecs/comment-item/comment-item.molec';
import { TitlePageMenuMolec } from './molecs/title-page-menu/title-page-menu.molec';
import { MbInfoBookMolec } from './molecs/mb-info-book/mb-info-book.molec';
import { MbDetailBookOrgan } from './organs/mb-list-detail-book/mb-list-detail-book.organ';
import { MbListTemplate } from './templates/mb-list/mb-list.template';

@NgModule({
  imports: [
    CommonModule,
    StorybookSupportModule,
    GlobalDesignSystemAtomicModule,
    CarouselModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  exports: [
    CommonModule,
    TabCategoryMolec,
    TabBookMolec,
    TabPageMolec,
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
    BreadcrumbMolec,
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
    TitlePageMenuMolec,
    MbInfoBookMolec,
    MbDetailBookOrgan,
    MbListTemplate,
  ],
  declarations: [
    TabCategoryMolec,
    TabBookMolec,
    TabPageMolec,
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
    BreadcrumbMolec,
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
    TitlePageMenuMolec,
    MbInfoBookMolec,
    MbDetailBookOrgan,
    MbListTemplate,
  ],
})
export class ReaderWebUiMarketAtomicModule { }

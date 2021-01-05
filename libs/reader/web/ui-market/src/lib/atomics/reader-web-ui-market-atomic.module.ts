import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
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

@NgModule({
  imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule],
  exports: [CommonModule, TabCategoryMolec, TabBookMolec, TabPageMolec, ListInfoLongBookMolec, ListInfoProseMolec, ListInfoShortBookMolec, ListInfoTopBookMolec, ListDetailLongBookOrgan, ListDetailShortBookOrgan, ListDetailProseOrgan, ListDetailTopBookOrgan, ListTemplate, HomeTemplate, HomeTagsOrgan, HomeInfoBookFeaturedMolec, HomeInfoBookReviewMolec, HomeInfoBookUpdateMolec, HomeDetailBookFeaturedOrgan, HomeDetailBookReviewOrgan, HomeDetailBookUpdateOrgan],
  declarations: [TabCategoryMolec, TabBookMolec, TabPageMolec, ListInfoLongBookMolec, ListInfoProseMolec, ListInfoShortBookMolec, ListInfoTopBookMolec, ListDetailLongBookOrgan, ListDetailShortBookOrgan, ListDetailProseOrgan, ListDetailTopBookOrgan, ListTemplate, HomeTemplate, HomeTagsOrgan, HomeInfoBookFeaturedMolec, HomeInfoBookReviewMolec, HomeInfoBookUpdateMolec, HomeDetailBookFeaturedOrgan, HomeDetailBookReviewOrgan, HomeDetailBookUpdateOrgan]
})
export class ReaderWebUiMarketAtomicModule { }

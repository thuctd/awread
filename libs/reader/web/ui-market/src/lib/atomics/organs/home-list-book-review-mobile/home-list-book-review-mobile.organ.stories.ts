import { HomeListBookReviewMobileOrgan } from './home-list-book-review-mobile.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Home List Book Review Mobile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: HomeListBookReviewMobileOrgan,
  props: {

  }
})
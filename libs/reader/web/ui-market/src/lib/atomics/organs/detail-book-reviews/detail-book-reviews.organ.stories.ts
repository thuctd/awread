import { DetailBookReviewsOrgan } from './detail-book-reviews.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Detail Book Reviews'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: DetailBookReviewsOrgan,
  props: {

  }
})
import { HomeDetailBookReviewOrgan } from './home-detail-book-review.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Home Detail Book Review'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: HomeDetailBookReviewOrgan,
  props: {

  }
})
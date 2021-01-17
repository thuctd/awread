import { DetailBookReviewActionsMolec } from './detail-book-review-actions.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Detail Book Review Actions'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: DetailBookReviewActionsMolec,
  props: {

  }
})
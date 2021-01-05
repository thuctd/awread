import { HomeInfoBookReviewMolec } from './home-info-book-review.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Home Info Book Review'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: HomeInfoBookReviewMolec,
  props: {

  }
})
import { DetailBookInfoRatingMolec } from './detail-book-info-rating.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Detail Book Info Rating'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: DetailBookInfoRatingMolec,
  props: {

  }
})
import { DetailBookInfoActionsMolec } from './detail-book-info-actions.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Detail Book Info Actions'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: DetailBookInfoActionsMolec,
  props: {

  }
})
import { MbDetailBookOrgan } from './mb-list-detail-book.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Mb List Detail Book'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: MbDetailBookOrgan,
  props: {

  }
})
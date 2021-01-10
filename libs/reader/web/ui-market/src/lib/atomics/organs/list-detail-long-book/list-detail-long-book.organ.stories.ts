import { ListDetailLongBookOrgan } from './list-detail-long-book.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/List Detail Long Book'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: ListDetailLongBookOrgan,
  props: {

  }
})
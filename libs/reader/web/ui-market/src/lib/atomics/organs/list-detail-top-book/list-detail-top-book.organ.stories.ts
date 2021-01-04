import { ListDetailTopBookOrgan } from './list-detail-top-book.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/List Detail Top Book'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: ListDetailTopBookOrgan,
  props: {

  }
})
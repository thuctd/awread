import { ListDetailShortBookOrgan } from './list-detail-short-book.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/List Detail Short Book'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: ListDetailShortBookOrgan,
  props: {

  }
})
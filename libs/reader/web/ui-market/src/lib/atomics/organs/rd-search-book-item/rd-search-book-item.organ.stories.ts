import { RdSearchBookItemOrgan } from './rd-search-book-item.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Rd Search Book Item'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdSearchBookItemOrgan,
  props: {

  }
})
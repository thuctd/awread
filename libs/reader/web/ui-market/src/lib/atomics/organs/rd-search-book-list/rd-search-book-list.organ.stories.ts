import { RdSearchBookListOrgan } from './rd-search-book-list.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Rd Search Book List',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule],
  },
  component: RdSearchBookListOrgan,
  props: {},
});

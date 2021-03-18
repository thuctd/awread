import { RdSearchBookMbTemplate } from './rd-search-book-mb.template';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Templates/Rd Search Book Mb',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule],
  },
  component: RdSearchBookMbTemplate,
  props: {},
});

export const noData = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule],
  },
  component: RdSearchBookMbTemplate,
  props: {
    items: [],
  },
});

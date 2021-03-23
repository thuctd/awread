import { RdSearchBookTemplate } from './rd-search-book.template';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Templates/Rd Search Book',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule],
  },
  component: RdSearchBookTemplate,
  props: {},
});

export const noData = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule],
  },
  component: RdSearchBookTemplate,
  props: {
    items: [],
  },
});

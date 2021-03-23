import { RdSearchBookHeaderMolec } from './rd-search-book-header.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Rd Search Book Header'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdSearchBookHeaderMolec,
  props: {

  }
})
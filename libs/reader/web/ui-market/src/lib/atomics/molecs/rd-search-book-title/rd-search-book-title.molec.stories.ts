import { RdSearchBookTitleMolec } from './rd-search-book-title.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Rd Search Book Title'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdSearchBookTitleMolec,
  props: {

  }
})
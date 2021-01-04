import { ListInfoLongBookMolec } from './list-info-long-book.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/List Info Long Book'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: ListInfoLongBookMolec,
  props: {

  }
})
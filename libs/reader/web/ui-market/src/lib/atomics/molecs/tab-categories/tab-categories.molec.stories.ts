import { TabCategoriesMolec } from './tab-categories.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Tab Categories'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: TabCategoriesMolec,
  props: {

  }
})
import { RdHomeListBookUpdateMolec } from './rd-home-list-book-update.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Rd Home List Book Update'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdHomeListBookUpdateMolec,
  props: {

  }
})
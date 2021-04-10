import { RdHomeBookUpdateTabMolec } from './rd-home-book-update-tab.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Rd Home Book Update Tab'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdHomeBookUpdateTabMolec,
  props: {

  }
})
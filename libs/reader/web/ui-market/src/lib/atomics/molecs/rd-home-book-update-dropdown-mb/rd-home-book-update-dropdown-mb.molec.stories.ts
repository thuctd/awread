import { RdHomeBookUpdateDropdownMbMolec } from './rd-home-book-update-dropdown-mb.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Rd Home Book Update Dropdown Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdHomeBookUpdateDropdownMbMolec,
  props: {

  }
})
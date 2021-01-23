import { DetailBookOptionButtonsMolec } from './detail-book-option-buttons.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Detail Book Option Buttons'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: DetailBookOptionButtonsMolec,
  props: {

  }
})
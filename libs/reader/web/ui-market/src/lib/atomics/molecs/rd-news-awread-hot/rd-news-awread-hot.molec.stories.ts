import { RdNewsAwreadHotMolec } from './rd-news-awread-hot.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Rd News Awread Hot'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdNewsAwreadHotMolec,
  props: {

  }
})
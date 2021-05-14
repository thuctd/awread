import { RdNewsAwreadListMolec } from './rd-news-awread-list.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Rd News Awread List'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdNewsAwreadListMolec,
  props: {

  }
})
import { RdNewsShareExperienceMolec } from './rd-news-share-experience.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Rd News Share Experience'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdNewsShareExperienceMolec,
  props: {

  }
})
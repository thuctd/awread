import { RdIntroductionContentMbMolec } from './rd-introduction-content-mb.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Rd Introduction Content Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdIntroductionContentMbMolec,
  props: {

  }
})
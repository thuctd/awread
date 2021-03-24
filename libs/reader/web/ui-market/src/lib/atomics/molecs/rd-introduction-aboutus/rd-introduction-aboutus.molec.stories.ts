import { RdIntroductionAboutusMolec } from './rd-introduction-aboutus.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Rd Introduction Aboutus'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdIntroductionAboutusMolec,
  props: {

  }
})
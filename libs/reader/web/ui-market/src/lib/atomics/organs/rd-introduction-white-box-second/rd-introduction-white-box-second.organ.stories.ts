import { RdIntroductionWhiteBoxSecondOrgan } from './rd-introduction-white-box-second.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Rd Introduction White Box Second'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdIntroductionWhiteBoxSecondOrgan,
  props: {

  }
})
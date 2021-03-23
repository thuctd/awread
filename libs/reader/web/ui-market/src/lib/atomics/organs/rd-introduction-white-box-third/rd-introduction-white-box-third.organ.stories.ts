import { RdIntroductionWhiteBoxThirdOrgan } from './rd-introduction-white-box-third.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Rd Introduction White Box Third'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdIntroductionWhiteBoxThirdOrgan,
  props: {

  }
})
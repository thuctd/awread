import { RdIntroductionWhiteBoxFirstOrgan } from './rd-introduction-white-box-first.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Rd Introduction White Box First'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdIntroductionWhiteBoxFirstOrgan,
  props: {

  }
})
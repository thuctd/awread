import { RdIntroductionHotlineMbOrgan } from './rd-introduction-hotline-mb.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Rd Introduction Hotline Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdIntroductionHotlineMbOrgan,
  props: {

  }
})
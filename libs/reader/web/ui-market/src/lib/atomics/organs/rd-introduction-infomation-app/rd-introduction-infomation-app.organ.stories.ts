import { RdIntroductionInfomationAppOrgan } from './rd-introduction-infomation-app.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Rd Introduction Infomation App'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdIntroductionInfomationAppOrgan,
  props: {

  }
})
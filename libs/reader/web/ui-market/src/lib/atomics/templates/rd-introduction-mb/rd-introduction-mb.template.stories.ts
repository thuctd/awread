import { RdIntroductionMbTemplate } from './rd-introduction-mb.template';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Templates/Rd Introduction Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdIntroductionMbTemplate,
  props: {

  }
})
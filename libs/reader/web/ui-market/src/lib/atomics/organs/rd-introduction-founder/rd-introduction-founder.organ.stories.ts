import { RdIntroductionFounderOrgan } from './rd-introduction-founder.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Rd Introduction Founder Second',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule],
  },
  component: RdIntroductionFounderOrgan,
  props: {},
});

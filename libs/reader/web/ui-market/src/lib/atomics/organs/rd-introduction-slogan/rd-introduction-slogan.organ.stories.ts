import { RdIntroductionSloganOrgan } from './rd-introduction-slogan.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Rd Introduction Slogan First',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule],
  },
  component: RdIntroductionSloganOrgan,
  props: {},
});

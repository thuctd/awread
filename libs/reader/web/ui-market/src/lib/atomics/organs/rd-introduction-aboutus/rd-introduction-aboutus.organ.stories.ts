import { RdIntroductionAboutUsOrgan } from './rd-introduction-aboutus.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Rd Introduction About Us Third',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule],
  },
  component: RdIntroductionAboutUsOrgan,
  props: {},
});

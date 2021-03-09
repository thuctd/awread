import { DetailBookTopMobileOrgan } from './detail-book-top-mobile.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Detail Book Top Mobile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: DetailBookTopMobileOrgan,
  props: {

  }
})
import { DetailBookTopOrgan } from './detail-book-top.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Detail Book Top'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: DetailBookTopOrgan,
  props: {

  }
})
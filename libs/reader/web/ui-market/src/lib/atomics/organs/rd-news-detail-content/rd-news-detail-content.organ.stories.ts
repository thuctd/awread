import { RdNewsDetailContentOrgan } from './rd-news-detail-content.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Rd News Detail Content'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdNewsDetailContentOrgan,
  props: {

  }
})
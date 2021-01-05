import { HomeDetailBookUpdateOrgan } from './home-detail-book-update.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Home Detail Book Update'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: HomeDetailBookUpdateOrgan,
  props: {

  }
})
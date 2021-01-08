import { HomeDetailBookFeaturedOrgan } from './home-detail-book-featured.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Home Detail Book Featured'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: HomeDetailBookFeaturedOrgan,
  props: {

  }
})
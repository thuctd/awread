import { HomeListBookFeaturedMobileOrgan } from './home-list-book-featured-mobile.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Home List Book Featured Mobile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: HomeListBookFeaturedMobileOrgan,
  props: {

  }
})
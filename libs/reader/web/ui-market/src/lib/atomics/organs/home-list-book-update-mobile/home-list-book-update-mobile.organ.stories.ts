import { HomeListBookUpdateMobileOrgan } from './home-list-book-update-mobile.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/Home List Book Update Mobile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: HomeListBookUpdateMobileOrgan,
  props: {

  }
})
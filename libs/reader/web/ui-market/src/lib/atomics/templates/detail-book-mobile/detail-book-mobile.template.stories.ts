import { DetailBookMobileTemplate } from './detail-book-mobile.template';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Templates/Detail Book Mobile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: DetailBookMobileTemplate,
  props: {

  }
})
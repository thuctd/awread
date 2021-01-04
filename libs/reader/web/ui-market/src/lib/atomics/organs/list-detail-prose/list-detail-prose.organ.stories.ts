import { ListDetailProseOrgan } from './list-detail-prose.organ';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Organs/List Detail Prose'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: ListDetailProseOrgan,
  props: {

  }
})
import { BooksMbTemplate } from './books-mb.template';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Templates/Books Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: BooksMbTemplate,
  props: {

  }
})
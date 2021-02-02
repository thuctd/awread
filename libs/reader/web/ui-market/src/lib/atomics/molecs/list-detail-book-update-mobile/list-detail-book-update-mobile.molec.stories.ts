import { ListDetailBookUpdateMobileMolec } from './list-detail-book-update-mobile.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/List Detail Book Update Mobile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: ListDetailBookUpdateMobileMolec,
  props: {

  }
})
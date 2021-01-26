import { DetailBookInfoMolec } from './detail-book-info.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Detail Book Info'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: DetailBookInfoMolec,
  props: {

  }
})
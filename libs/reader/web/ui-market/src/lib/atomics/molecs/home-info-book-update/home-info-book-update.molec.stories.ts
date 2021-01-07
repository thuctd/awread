import { HomeInfoBookUpdateMolec } from './home-info-book-update.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Home Info Book Update'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: HomeInfoBookUpdateMolec,
  props: {

  }
})
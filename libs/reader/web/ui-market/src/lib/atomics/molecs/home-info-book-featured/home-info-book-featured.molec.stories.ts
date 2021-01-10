import { HomeInfoBookFeaturedMolec } from './home-info-book-featured.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Home Info Book Featured'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: HomeInfoBookFeaturedMolec,
  props: {

  }
})
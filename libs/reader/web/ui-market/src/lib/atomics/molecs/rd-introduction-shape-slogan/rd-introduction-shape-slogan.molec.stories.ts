import { RdIntroductionShapeSloganMolec } from './rd-introduction-shape-slogan.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Rd Introduction Shape Slogan'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdIntroductionShapeSloganMolec,
  props: {

  }
})
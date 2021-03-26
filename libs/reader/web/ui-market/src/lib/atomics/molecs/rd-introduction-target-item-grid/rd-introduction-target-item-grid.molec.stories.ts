import { RdIntroductionTargetItemGridMolec } from './rd-introduction-target-item-grid.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Rd Introduction Target Item Grid'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdIntroductionTargetItemGridMolec,
  props: {

  }
})
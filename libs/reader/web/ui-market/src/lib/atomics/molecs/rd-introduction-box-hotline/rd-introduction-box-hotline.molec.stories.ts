import { RdIntroductionBoxHotlineMolec } from './rd-introduction-box-hotline.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Rd Introduction Box Hotline'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: RdIntroductionBoxHotlineMolec,
  props: {

  }
})
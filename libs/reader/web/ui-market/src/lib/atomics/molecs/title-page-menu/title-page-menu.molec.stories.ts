import { TitlePageMenuMolec } from './title-page-menu.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Title Page Menu'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: TitlePageMenuMolec,
  props: {

  }
})
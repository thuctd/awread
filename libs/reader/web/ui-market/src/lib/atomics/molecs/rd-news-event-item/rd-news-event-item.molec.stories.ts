import { RdNewsEventItemMolec } from './rd-news-event-item.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Rd News Event Item',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule],
  },
  component: RdNewsEventItemMolec,
  props: {},
});

import { HeadReadBookMolec } from './head-read-book.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Head Readbook',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule],
  },
  component: HeadReadBookMolec,
  props: {},
});

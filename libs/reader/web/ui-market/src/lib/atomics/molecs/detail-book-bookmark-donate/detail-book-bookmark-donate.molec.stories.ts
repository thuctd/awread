import { DetailBookBookmarkDonateMolec } from './detail-book-bookmark-donate.molec';
import { ReaderWebUiMarketAtomicModule } from '../../reader-web-ui-market-atomic.module';

export default {
  title: 'Market/Molecs/Detail Book Bookmark Donate'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiMarketAtomicModule]
  },
  component: DetailBookBookmarkDonateMolec,
  props: {

  }
})
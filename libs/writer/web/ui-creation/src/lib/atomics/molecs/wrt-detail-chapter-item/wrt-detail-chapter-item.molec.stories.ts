import { WrtDetailChapterItemMolec } from './wrt-detail-chapter-item.molec';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Molecs/Wrt Detail Chapter Item'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: WrtDetailChapterItemMolec,
  props: {

  }
})
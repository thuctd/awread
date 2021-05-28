import { WrtDetailTocChapterActMolec } from './wrt-detail-toc-chapter-act.molec';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Molecs/Wrt Detail Toc Chapter Act'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: WrtDetailTocChapterActMolec,
  props: {

  }
})
import { WrtDetailTocChapterInfoMolec } from './wrt-detail-toc-chapter-info.molec';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Molecs/Wrt Detail Toc Chapter Info'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: WrtDetailTocChapterInfoMolec,
  props: {

  }
})
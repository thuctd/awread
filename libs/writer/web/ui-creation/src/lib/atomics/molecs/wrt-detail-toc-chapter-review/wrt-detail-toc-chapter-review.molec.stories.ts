import { WrtDetailTocChapterReviewMolec } from './wrt-detail-toc-chapter-review.molec';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Molecs/Wrt Detail Toc Chapter Review'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: WrtDetailTocChapterReviewMolec,
  props: {

  }
})
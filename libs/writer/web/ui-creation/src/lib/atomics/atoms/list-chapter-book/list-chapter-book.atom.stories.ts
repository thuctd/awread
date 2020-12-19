import { ListChapterBookAtom } from './list-chapter-book.atom';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Atoms/List Chapter Book'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: ListChapterBookAtom,
  props: {

  }
})
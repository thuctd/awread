import { ListRatingBookAtom } from './list-rating-book.atom';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Atoms/List Rating Book'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: ListRatingBookAtom,
  props: {

  }
})
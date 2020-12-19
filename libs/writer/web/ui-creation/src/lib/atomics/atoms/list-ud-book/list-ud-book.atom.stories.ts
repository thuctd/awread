import { ListUdBookAtom } from './list-ud-book.atom';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Atoms/List Ud Book'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: ListUdBookAtom,
  props: {

  }
})
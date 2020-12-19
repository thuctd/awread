import { ListImgBookAtom } from './list-img-book.atom';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Atoms/List Img Book'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: ListImgBookAtom,
  props: {

  }
})
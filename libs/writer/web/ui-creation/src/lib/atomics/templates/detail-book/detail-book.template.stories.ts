import { DetailBookTemplate } from './detail-book.template';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Templates/Detail Book'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: DetailBookTemplate,
  props: {

  }
})
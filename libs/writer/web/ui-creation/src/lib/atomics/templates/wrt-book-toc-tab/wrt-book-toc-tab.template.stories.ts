import { WrtBookTocTabTemplate } from './wrt-book-toc-tab.template';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Templates/Wrt Book Toc Tab'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: WrtBookTocTabTemplate,
  props: {

  }
})
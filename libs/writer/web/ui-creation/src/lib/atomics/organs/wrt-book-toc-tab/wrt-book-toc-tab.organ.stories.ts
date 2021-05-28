import { WrtBookTocTabOrgan } from './wrt-book-toc-tab.organ';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Organs/Wrt Book Toc Tab'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: WrtBookTocTabOrgan,
  props: {

  }
})
import { WrtBookDetailTabOrgan } from './wrt-book-detail-tab.organ';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Organs/Wrt Book Detail Tab'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: WrtBookDetailTabOrgan,
  props: {

  }
})
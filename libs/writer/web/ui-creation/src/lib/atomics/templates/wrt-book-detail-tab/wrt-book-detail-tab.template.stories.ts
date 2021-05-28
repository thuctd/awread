import { WrtBookDetailTabTemplate } from './wrt-book-detail-tab.template';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Templates/Wrt Book Detail Tab'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: WrtBookDetailTabTemplate,
  props: {

  }
})
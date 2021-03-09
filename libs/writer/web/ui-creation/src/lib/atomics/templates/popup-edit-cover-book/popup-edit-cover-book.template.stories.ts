import { PopupEditCoverBookTemplate } from './popup-edit-cover-book.template';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Templates/Popup Edit Cover Book'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: PopupEditCoverBookTemplate,
  props: {

  }
})
import { PopupCoverImageTemplate } from './popup-cover-image.template';
import { WriterWebSharedAtomicModule } from '../../writer-web-shared-atomic.module';

export default {
  title: 'Shared/Templates/Popup Cover Image'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebSharedAtomicModule]
  },
  component: PopupCoverImageTemplate,
  props: {

  }
})
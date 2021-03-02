import { PopupCoverImageAlignOrgan } from './popup-cover-image-align.organ';
import { WriterWebSharedAtomicModule } from '../../writer-web-shared-atomic.module';

export default {
  title: 'Shared/Organs/Popup Cover Image Align'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebSharedAtomicModule]
  },
  component: PopupCoverImageAlignOrgan,
  props: {

  }
})
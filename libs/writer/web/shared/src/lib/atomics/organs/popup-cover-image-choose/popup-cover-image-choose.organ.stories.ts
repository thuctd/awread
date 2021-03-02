import { PopupCoverImageChooseOrgan } from './popup-cover-image-choose.organ';
import { WriterWebSharedAtomicModule } from '../../writer-web-shared-atomic.module';

export default {
  title: 'Shared/Organs/Popup Cover Image Choose'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebSharedAtomicModule]
  },
  component: PopupCoverImageChooseOrgan,
  props: {

  }
})
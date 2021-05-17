import { PopupCoverImageAlignAtom } from './popup-cover-image-align.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Popup Cover Image Align'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: PopupCoverImageAlignAtom,
  props: {

  }
})
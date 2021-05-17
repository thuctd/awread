import { PopupCoverImageChooseAtom } from './popup-cover-image-choose.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Popup Cover Image Choose'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: PopupCoverImageChooseAtom,
  props: {

  }
})
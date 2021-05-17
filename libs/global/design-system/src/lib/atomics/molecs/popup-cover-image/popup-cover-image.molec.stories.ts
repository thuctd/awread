import { PopupCoverImageMolec } from './popup-cover-image.molec';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Molecs/Popup Cover Image'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: PopupCoverImageMolec,
  props: {

  }
})
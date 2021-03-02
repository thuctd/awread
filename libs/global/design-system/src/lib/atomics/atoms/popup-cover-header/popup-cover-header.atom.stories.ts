import { PopupCoverHeaderAtom } from './popup-cover-header.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Paragraph/text/Popup Cover Header'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: PopupCoverHeaderAtom,
  props: {

  }
})
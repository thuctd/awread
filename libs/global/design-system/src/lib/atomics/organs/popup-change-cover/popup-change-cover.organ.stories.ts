import { PopupChangeCoverOrgan } from './popup-change-cover.organ';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Organs/Popup Change Cover'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: PopupChangeCoverOrgan,
  props: {

  }
})
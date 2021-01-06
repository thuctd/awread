import { IconBtnAtom } from './icon-btn.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Icon Btn'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: IconBtnAtom,
  props: {

  }
})
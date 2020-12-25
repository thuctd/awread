import { WrtMenuBtnAtom } from './wrt-menu-btn.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Wrt Menu Btn'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: WrtMenuBtnAtom,
  props: {

  }
})

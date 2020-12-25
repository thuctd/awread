import { WrtIconMenuAtom } from './wrt-icon-menu.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Wrt Icon Menu'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: WrtIconMenuAtom,
  props: {

  }
})

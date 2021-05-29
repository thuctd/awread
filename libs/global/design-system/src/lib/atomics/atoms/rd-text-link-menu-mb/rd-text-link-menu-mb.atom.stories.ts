import { RdTextLinkMenuMbAtom } from './rd-text-link-menu-mb.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Rd Text Link Menu Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: RdTextLinkMenuMbAtom,
  props: {

  }
})
import { RdDropdownMenuMbAtom } from './rd-dropdown-menu-mb.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Rd Dropdown Menu Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: RdDropdownMenuMbAtom,
  props: {

  }
})
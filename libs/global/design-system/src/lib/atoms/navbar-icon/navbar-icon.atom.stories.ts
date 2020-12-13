import { NavbarIconAtom } from './navbar-icon.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'design system/atoms/navbar icon'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: NavbarIconAtom,
  props: {

  }
})
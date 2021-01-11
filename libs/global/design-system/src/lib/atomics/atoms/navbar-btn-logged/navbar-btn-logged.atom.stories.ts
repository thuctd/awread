import { NavbarBtnLoggedAtom } from './navbar-btn-logged.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Buttons/button/Navbar Btn Logged',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: NavbarBtnLoggedAtom,
  props: {},
});

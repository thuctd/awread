import { NavbarAuthBtnAtom } from './navbar-auth-btn.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Buttons/button/Navbar Auth Btn',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: NavbarAuthBtnAtom,
  props: {},
});
export const show = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: NavbarAuthBtnAtom,
  props: {
    show: true,
  },
});

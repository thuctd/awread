import { NavbarIconAtom } from './navbar-icon.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Buttons/iconButton/navbar icon',
};

export const basic = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: NavbarIconAtom,
  props: {
    name: '',
    active: '',
  },
});

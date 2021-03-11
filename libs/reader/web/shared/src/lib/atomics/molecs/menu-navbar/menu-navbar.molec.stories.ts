import { MenuNavbarMolec } from './menu-navbar.molec';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Menu Navbar',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule],
  },
  component: MenuNavbarMolec,
  props: {},
});

export const login = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule],
  },
  component: MenuNavbarMolec,
  props: {
    isLogin: false,
  },
});

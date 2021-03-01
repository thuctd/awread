import { RdNavbarMbTemplate } from './rd-navbar-mb.template';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Templates/Rd Navbar Mb',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule],
  },
  component: RdNavbarMbTemplate,
  props: {},
});

export const isLogin = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule],
  },
  component: RdNavbarMbTemplate,
  props: {
    isLogin: true,
  },
});

export const isSearch = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule],
  },
  component: RdNavbarMbTemplate,
  props: {
    isSearch: true,
  },
});

export const isMenu = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule],
  },
  component: RdNavbarMbTemplate,
  props: {
    isMenu: true,
  },
});

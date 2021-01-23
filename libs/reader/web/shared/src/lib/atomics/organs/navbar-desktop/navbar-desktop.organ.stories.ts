import { NavbarDesktopOrgan } from './navbar-desktop.organ';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Organs/Navbar Desktop'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: NavbarDesktopOrgan,
  props: {

  }
})
export const isLogged = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: NavbarDesktopOrgan,
  props: {
    isLogin: true
  }
})
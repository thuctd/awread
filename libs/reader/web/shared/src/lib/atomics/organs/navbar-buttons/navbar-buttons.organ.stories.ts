import { NavbarButtonsOrgan } from './navbar-buttons.organ';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Organs/Navbar Buttons'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: NavbarButtonsOrgan,
  props: {

  }
})

export const isLogged = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: NavbarButtonsOrgan,
  props: {
    isLogin: true
  }
})
import { NavbarAuthBtnsMolec } from './navbar-auth-btns.molec';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';
import {action} from '@storybook/addon-actions';
export default {
  title: 'Shared/Molecs/Navbar Auth Btns'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: NavbarAuthBtnsMolec,
  props: {
    submitEvent: action('handle function')
  }
})
export const show = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: NavbarAuthBtnsMolec,
  props: {
    show: true,
    submitEvent: action('handle function')
  }
})
export const logged = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: NavbarAuthBtnsMolec,
  props: {
    isLogin: true,
    submitEvent: action('handle function')
  }
})
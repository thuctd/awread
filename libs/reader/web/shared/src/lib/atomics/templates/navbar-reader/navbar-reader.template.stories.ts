import { NavbarReaderTemplate } from './navbar-reader.template';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Templates/Navbar Reader'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: NavbarReaderTemplate,
  props: {

  }
})
export const isLogged = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: NavbarReaderTemplate,
  props: {
    isLogin: true
  }
})
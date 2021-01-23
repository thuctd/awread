import { NavbarAuthLoggedMolec } from './navbar-auth-logged.molec';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Navbar Auth Logged'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: NavbarAuthLoggedMolec,
  props: {

  }
})
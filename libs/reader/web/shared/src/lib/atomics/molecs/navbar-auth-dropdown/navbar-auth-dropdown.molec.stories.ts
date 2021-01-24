import { NavbarAuthDropdownMolec } from './navbar-auth-dropdown.molec';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Navbar Auth Dropdown'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: NavbarAuthDropdownMolec,
  props: {

  }
})
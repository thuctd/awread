import { NavbarLinkGroupMolec } from './navbar-link-group.molec';
import { WriterWebSharedAtomicModule } from '../../writer-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Navbar Link Group'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebSharedAtomicModule]
  },
  component: NavbarLinkGroupMolec,
  props: {

  }
})
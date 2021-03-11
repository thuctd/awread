import { RdNavbarNotiMenuMolec } from './rd-navbar-noti-menu.molec';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Rd Navbar Noti Menu'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: RdNavbarNotiMenuMolec,
  props: {

  }
})
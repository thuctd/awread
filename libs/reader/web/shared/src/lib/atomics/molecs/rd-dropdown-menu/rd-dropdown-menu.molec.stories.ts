import { RdDropdownMenuMolec } from './rd-dropdown-menu.molec';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Rd Dropdown Menu'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: RdDropdownMenuMolec,
  props: {

  }
})
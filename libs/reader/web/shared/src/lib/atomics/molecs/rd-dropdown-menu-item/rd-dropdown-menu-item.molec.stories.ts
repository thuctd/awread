import { RdDropdownMenuItemMolec } from './rd-dropdown-menu-item.molec';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Rd Dropdown Menu Item'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: RdDropdownMenuItemMolec,
  props: {

  }
})
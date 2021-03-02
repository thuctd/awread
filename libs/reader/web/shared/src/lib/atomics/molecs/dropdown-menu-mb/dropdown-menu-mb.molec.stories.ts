import { DropdownMenuMbMolec } from './dropdown-menu-mb.molec';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Dropdown Menu Mb',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule],
  },
  component: DropdownMenuMbMolec,
  props: {},
});

export const isMenu = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule],
  },
  component: DropdownMenuMbMolec,
  props: {
    isDisplayMenu: false,
  },
});

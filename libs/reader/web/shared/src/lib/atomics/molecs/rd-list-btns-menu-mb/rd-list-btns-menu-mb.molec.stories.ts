import { RdListBtnsMenuMbMolec } from './rd-list-btns-menu-mb.molec';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Rd List Btns Menu Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: RdListBtnsMenuMbMolec,
  props: {

  }
})
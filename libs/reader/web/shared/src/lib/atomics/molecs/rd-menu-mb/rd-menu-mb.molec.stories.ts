import { RdMenuMbMolec } from './rd-menu-mb.molec';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Rd Menu Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: RdMenuMbMolec,
  props: {

  }
})
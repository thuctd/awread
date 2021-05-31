import { RdContentMenuMbMolec } from './rd-content-menu-mb.molec';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Rd Content Menu Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: RdContentMenuMbMolec,
  props: {

  }
})
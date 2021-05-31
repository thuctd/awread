import { RdHeadMenuMbMolec } from './rd-head-menu-mb.molec';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Rd Head Menu Mb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: RdHeadMenuMbMolec,
  props: {

  }
})
import { InfoMolec } from './info.molec';
import { ReaderWebSharedAtomicModule } from '../../reader-web-shared-atomic.module';

export default {
  title: 'Shared/Molecs/Info'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebSharedAtomicModule]
  },
  component: InfoMolec,
  props: {

  }
})

import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';
import { AuthHeaderMolec } from './auth-header.molec';

export default {
  title: 'Auth/Molecs/Forgot Header'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: AuthHeaderMolec,
  props: {

  }
})
import { ForgotFormMolec } from './forgot-form.molec';
import { ReaderWebUiAuthAtomicModule } from '../../reader-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Molecs/Forgot Form'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthAtomicModule]
  },
  component: ForgotFormMolec,
  props: {

  }
})
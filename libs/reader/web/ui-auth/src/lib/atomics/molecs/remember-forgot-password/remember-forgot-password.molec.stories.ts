import { RememberForgotPasswordMolec } from './remember-forgot-password.molec';
import { ReaderWebUiAuthAtomicModule } from '../../reader-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Molecs/Remember Forgot Password'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthAtomicModule]
  },
  component: RememberForgotPasswordMolec,
  props: {

  }
})
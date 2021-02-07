import { LoginFormMolec } from './login-form.molec';
import { ReaderWebUiAuthAtomicModule } from '../../reader-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Molecs/Login Form'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthAtomicModule]
  },
  component: LoginFormMolec,
  props: {

  }
})
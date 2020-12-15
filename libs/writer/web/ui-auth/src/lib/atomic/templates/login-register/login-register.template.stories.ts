import { LoginRegisterTemplate } from './login-register.template';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Templates/Login Register'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: LoginRegisterTemplate,
  props: {

  }
})
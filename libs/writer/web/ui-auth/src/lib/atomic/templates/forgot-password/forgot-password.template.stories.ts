import { ForgotPasswordTemplate } from './forgot-password.template';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Templates/Forgot Password'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: ForgotPasswordTemplate,
  props: {

  }
})
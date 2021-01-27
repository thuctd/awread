import { ForgotPasswordTemplate } from './forgot-password.template';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Auth/Templates/Forgot Password'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: ForgotPasswordTemplate,
  props: {
    // forgotSubmitEvent: action('close action')  
  }
})
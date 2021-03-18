import { WrtForgotPasswordTemplate } from './wrt-forgot-password.template';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Auth/Templates/Wrt Forgot Password',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtForgotPasswordTemplate,
  props: {
    // forgotSubmitEvent: action('close action')
  },
});

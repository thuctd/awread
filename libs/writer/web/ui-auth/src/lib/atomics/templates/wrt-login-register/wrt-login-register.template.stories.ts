import { WrtLoginRegisterTemplate } from './wrt-login-register.template';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Auth/Templates/Wrt Login Register',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtLoginRegisterTemplate,
  props: {
    submitEvent: action('submit event'),
  },
});

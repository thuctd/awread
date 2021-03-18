import { WrtNewPasswordTemplate } from './wrt-new-password.template';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Auth/Templates/Wrt New Password',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtNewPasswordTemplate,
  props: {
    submitEvent: action('new password action'),
  },
});

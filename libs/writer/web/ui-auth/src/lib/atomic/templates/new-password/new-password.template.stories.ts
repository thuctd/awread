import { NewPasswordTemplate } from './new-password.template';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Auth/Templates/New Password'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: NewPasswordTemplate,
  props: {
submitEvent: action('new password action')
  }
})
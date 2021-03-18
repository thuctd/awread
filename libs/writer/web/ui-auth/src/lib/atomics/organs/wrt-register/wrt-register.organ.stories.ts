import { WrtRegisterOrgan } from './wrt-register.organ';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Auth/Organs/Wrt Register',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtRegisterOrgan,
  props: {
    submitEvent: action('user da an nut'),
  },
});

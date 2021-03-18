import { WrtForgotOrgan } from './wrt-forgot.organ';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Organs/Wrt Forgot',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtForgotOrgan,
  props: {},
});

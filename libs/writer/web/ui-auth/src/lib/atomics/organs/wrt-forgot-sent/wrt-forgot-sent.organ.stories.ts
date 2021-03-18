import { WrtForgotSentOrgan } from './wrt-forgot-sent.organ';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Organs/Wrt Forgot Sent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule],
  },
  component: WrtForgotSentOrgan,
  props: {},
});

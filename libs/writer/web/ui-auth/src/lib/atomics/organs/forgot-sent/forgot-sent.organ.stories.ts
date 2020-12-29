import { ForgotSentOrgan } from './forgot-sent.organ';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Organs/Forgot Sent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: ForgotSentOrgan,
  props: {

  }
})
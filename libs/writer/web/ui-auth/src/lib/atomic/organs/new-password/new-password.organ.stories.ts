import { NewPasswordOrgan } from './new-password.organ';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Organs/New Password'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: NewPasswordOrgan,
  props: {

  }
})
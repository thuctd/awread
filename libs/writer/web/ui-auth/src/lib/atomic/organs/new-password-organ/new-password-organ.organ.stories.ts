import { NewPasswordOrganOrgan } from './new-password-organ.organ';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Organs/New Password Organ'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: NewPasswordOrganOrgan,
  props: {

  }
})
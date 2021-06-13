import { RegisterCompleteMobileOrgan } from './register-complete-mobile.organ';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Organs/Register Complete Mobile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: RegisterCompleteMobileOrgan,
  props: {

  }
})
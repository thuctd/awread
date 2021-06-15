import { RegisterCompleteDesktopOrgan } from './register-complete-desktop.organ';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Organs/Register Complete Desktop'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: RegisterCompleteDesktopOrgan,
  props: {

  }
})
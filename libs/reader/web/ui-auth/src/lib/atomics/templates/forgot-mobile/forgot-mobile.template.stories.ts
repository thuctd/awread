import { ForgotMobileTemplate } from './forgot-mobile.template';
import { ReaderWebUiAuthAtomicModule } from '../../reader-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Templates/Forgot Mobile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthAtomicModule]
  },
  component: ForgotMobileTemplate,
  props: {

  }
})
import { ForgotWebTemplate } from './forgot-web.template';
import { ReaderWebUiAuthAtomicModule } from '../../reader-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Templates/Forgot Web'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthAtomicModule]
  },
  component: ForgotWebTemplate,
  props: {

  }
})
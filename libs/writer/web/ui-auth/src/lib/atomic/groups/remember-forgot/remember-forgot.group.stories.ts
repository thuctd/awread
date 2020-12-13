import { RememberForgotGroup } from './remember-forgot.group';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Groups/RememberForgot'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: RememberForgotGroup,
  props: {

  }
})
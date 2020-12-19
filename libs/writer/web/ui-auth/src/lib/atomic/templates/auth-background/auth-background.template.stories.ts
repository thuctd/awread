import { AuthBackgroundTemplate } from './auth-background.template';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Templates/Auth Background'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: AuthBackgroundTemplate,
  props: {

  }
})
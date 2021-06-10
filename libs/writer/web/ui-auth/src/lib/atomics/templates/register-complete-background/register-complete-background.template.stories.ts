import { RegisterCompleteBackgroundTemplate } from './register-complete-background.template';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Templates/Register Complete Background'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: RegisterCompleteBackgroundTemplate,
  props: {

  }
})
import { RegisterCompleteTemplate } from './register-complete.template';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Templates/Register Complete'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: RegisterCompleteTemplate,
  props: {

  }
})
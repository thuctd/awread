import { RegisterWebTemplate } from './register-web.template';
import { ReaderWebUiAuthAtomicModule } from '../../reader-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Templates/Register Web'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthAtomicModule]
  },
  component: RegisterWebTemplate,
  props: {

  }
})
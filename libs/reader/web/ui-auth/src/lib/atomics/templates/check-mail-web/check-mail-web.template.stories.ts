import { CheckMailWebTemplate } from './check-mail-web.template';
import { ReaderWebUiAuthAtomicModule } from '../../reader-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Templates/Check Mail Web'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthAtomicModule]
  },
  component: CheckMailWebTemplate,
  props: {

  }
})
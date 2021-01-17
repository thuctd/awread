import { CheckMailMobileTemplate } from './check-mail-mobile.template';
import { ReaderWebUiAuthAtomicModule } from '../../reader-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Templates/Check Mail Mobile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ReaderWebUiAuthAtomicModule]
  },
  component: CheckMailMobileTemplate,
  props: {

  }
})
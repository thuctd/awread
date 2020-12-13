import { LinkBtnAtom } from './link-btn.atom';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Atoms/ForgotBtn'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: LinkBtnAtom,
  props: {

  }
})
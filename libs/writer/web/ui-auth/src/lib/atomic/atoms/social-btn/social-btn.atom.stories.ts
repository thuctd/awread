import { SocialBtnAtom } from './social-btn.atom';
import { WriterWebUiAuthAtomicModule } from '../../writer-web-ui-auth-atomic.module';

export default {
  title: 'Auth/Atoms/SocialBtn'
}

export const facebook = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: SocialBtnAtom,
  props: {

  }
})
export const google = () => ({
  moduleMetadata: {
    imports: [WriterWebUiAuthAtomicModule]
  },
  component: SocialBtnAtom,
  props: {
    provider: 'google'
  }
})
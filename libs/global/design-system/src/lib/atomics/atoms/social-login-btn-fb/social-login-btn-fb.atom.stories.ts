import { SocialLoginBtnFbAtom } from './social-login-btn-fb.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Social Login Btn Fb'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: SocialLoginBtnFbAtom,
  props: {

  }
})
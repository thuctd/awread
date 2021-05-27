import { SocialConnectBtnAtom } from './social-connect-btn.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Social Connect Btn'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: SocialConnectBtnAtom,
  props: {

  }
})
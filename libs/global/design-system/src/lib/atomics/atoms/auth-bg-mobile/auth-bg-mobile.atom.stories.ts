import { AuthBgMobileAtom } from './auth-bg-mobile.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Background/Auth Bg Mobile',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: AuthBgMobileAtom,
  props: {},
});

import { SocialBtnAtom } from './social-btn.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Buttons/iconButton/Social Btn',
};

export const facebook = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: SocialBtnAtom,
  props: {},
});
export const google = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: SocialBtnAtom,
  props: {
    provider: 'google',
  },
});

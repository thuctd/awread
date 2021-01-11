import { WrtSocialMenuAtom } from './wrt-social-menu.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Menu/Wrt Social Menu',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: WrtSocialMenuAtom,
  props: {},
});

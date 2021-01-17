import { DetailSocialMenuAtom } from './detail-social-menu.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Menu/Detail Social Menu',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: DetailSocialMenuAtom,
  props: {},
});

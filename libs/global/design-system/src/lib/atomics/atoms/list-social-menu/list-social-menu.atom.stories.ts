import { ListSocialMenuAtom } from './list-social-menu.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Menu/List Social Menu',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: ListSocialMenuAtom,
  props: {},
});

import { MenuNavleftAtom } from './menu-navleft.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Menu/Menu Navleft',
};

export const Basic = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: MenuNavleftAtom,
  props: {},
});

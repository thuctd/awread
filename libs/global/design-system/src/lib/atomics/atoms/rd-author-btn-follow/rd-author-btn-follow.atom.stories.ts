import { RdAuthorBtnFollowAtom } from './rd-author-btn-follow.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Buttons/button/Rd Author Btn Follow',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: RdAuthorBtnFollowAtom,
  props: {},
});

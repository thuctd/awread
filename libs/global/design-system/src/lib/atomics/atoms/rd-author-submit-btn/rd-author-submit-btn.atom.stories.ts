import { RdAuthorSubmitBtnAtom } from './rd-author-submit-btn.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Buttons/button/Rd Author Submit Btn',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: RdAuthorSubmitBtnAtom,
  props: {},
});

import { CreationSubmitBtnAtom } from './creation-submit-btn.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Buttons/button/Creation Submit Btn',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: CreationSubmitBtnAtom,
  props: {},
});

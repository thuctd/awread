import { RdBaseBtnGreenAtom } from './rd-base-btn-green.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Buttons/button/Rd Base Btn Green',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: RdBaseBtnGreenAtom,
  props: {},
});

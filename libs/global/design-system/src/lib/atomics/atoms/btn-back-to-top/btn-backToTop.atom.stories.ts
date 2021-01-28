import { BtnBackToTopAtom } from './btn-back-to-top.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Buttons/button/Btn Backtotop',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: BtnBackToTopAtom,
  props: {},
});

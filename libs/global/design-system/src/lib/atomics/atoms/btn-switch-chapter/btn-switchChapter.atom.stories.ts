import { BtnSwitchChapterAtom } from './btn-switch-chapter.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Buttons/button/Btn Switchchapter',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: BtnSwitchChapterAtom,
  props: {},
});

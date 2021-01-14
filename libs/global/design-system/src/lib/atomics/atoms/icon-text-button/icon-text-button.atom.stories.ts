import { IconTextButtonAtom } from './icon-text-button.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Buttons/iconButton/Icon Text Button',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: IconTextButtonAtom,
  props: {},
});

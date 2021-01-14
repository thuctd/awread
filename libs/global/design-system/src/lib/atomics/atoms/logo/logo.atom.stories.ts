import { LogoAtom } from './logo.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Images/logo/Logo',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: LogoAtom,
  props: {},
});
export const logoWhite = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: LogoAtom,
  props: {
    logoWhite: true,
  },
});

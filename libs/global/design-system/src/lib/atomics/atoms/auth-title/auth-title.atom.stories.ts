import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';
import { AuthTitleAtom } from './auth-title.atom';

export default {
  title: 'Design System/Atoms/Paragraph/title/Auth Header',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: AuthTitleAtom,
  props: {},
});

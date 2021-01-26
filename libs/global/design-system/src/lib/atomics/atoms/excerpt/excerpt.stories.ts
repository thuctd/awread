import { ExcerptAtom } from './excerpt.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Paragraph/content/Rd List Content Novel',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: ExcerptAtom,
  props: {},
});

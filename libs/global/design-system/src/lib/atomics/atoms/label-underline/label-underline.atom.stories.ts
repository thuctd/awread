import { LabelUnderlineAtom } from './label-underline.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Paragraph/title/Label Underline',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: LabelUnderlineAtom,
  props: {},
});

import { RdListContentNovelAtom } from './rd-list-content-novel.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Paragraph/content/Rd List Content Novel',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule],
  },
  component: RdListContentNovelAtom,
  props: {},
});

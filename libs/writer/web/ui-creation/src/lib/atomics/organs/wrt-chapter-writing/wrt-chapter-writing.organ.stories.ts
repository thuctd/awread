import { WrtChapterWritingOrgan } from './wrt-chapter-writing.organ';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Organs/Wrt Chapter Writing',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule],
  },
  component: WrtChapterWritingOrgan,
  props: {},
});

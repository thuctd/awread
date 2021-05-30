import { WrtChapterWritingTemplate } from './wrt-chapter-writing.template';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Templates/Wrt Chapter Writing'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: WrtChapterWritingTemplate,
  props: {

  }
})
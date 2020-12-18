import { DetailTextareaFormAtom } from './detail-textarea-form.atom';
import { WriterWebUiCreationAtomicModule } from '../../writer-web-ui-creation-atomic.module';

export default {
  title: 'Creation/Atoms/Detail Textarea Form'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [WriterWebUiCreationAtomicModule]
  },
  component: DetailTextareaFormAtom,
  props: {

  }
})
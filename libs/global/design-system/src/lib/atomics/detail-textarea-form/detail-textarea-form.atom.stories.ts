import { DetailTextareaFormAtom } from './detail-textarea-form.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Detail Textarea Form'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: DetailTextareaFormAtom,
  props: {

  }
})

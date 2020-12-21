import { BigimgProfileAtom } from './bigimg-profile.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Bigimg Profile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: BigimgProfileAtom,
  props: {

  }
})
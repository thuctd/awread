import { SmailimgProfileAtom } from './smailimg-profile.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Smailimg Profile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: SmailimgProfileAtom,
  props: {

  }
})
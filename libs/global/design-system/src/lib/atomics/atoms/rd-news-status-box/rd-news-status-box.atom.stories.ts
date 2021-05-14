import { RdNewsStatusBoxAtom } from './rd-news-status-box.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Rd News Status Box'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: RdNewsStatusBoxAtom,
  props: {

  }
})
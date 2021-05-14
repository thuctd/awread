import { RdNewsAwreadItemAtom } from './rd-news-awread-item.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Rd News Awread Item'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: RdNewsAwreadItemAtom,
  props: {

  }
})
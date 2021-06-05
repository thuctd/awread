import { RdNewsShareExperienceItemAtom } from './rd-news-share-experience-item.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Rd News Share Experience Item'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: RdNewsShareExperienceItemAtom,
  props: {

  }
})
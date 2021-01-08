import { RdHomeIconRatingAtom } from './rd-home-icon-rating.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Rd Home Icon Rating'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: RdHomeIconRatingAtom,
  props: {

  }
})

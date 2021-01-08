import { RdHomeTabCategoryAtom } from './rd-home-tab-category.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Rd Home Tab Category'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: RdHomeTabCategoryAtom,
  props: {

  }
})
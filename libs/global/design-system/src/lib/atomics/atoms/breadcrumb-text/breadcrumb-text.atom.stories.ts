import { BreadcrumbTextAtom } from './breadcrumb-text.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Breadcrumb Text'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: BreadcrumbTextAtom,
  props: {

  }
})
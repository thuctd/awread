import { RdListTabPageAtom } from './rd-list-tab-page.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Rd List Tab Page'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: RdListTabPageAtom,
  props: {

  }
})
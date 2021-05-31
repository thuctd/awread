import { RdIconTextItemAtom } from './rd-icon-text-item.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Rd Icon Text Item'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: RdIconTextItemAtom,
  props: {

  }
})
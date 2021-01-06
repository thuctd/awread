import { DetailInfoLineAtom } from './detail-info-line.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Detail Info Line'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: DetailInfoLineAtom,
  props: {

  }
})
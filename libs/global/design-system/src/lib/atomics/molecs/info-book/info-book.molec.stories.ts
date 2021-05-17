import { InfoBookMolec } from './info-book.molec';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Molecs/Info Book'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: InfoBookMolec,
  props: {

  }
})
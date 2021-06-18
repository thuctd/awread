import { ListInfoProseMolec } from './list-info-prose.molec';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Molecs/List Info Prose'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: ListInfoProseMolec,
  props: {

  }
})
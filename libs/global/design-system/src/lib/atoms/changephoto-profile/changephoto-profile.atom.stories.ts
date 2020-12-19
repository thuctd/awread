import { ChangephotoProfileAtom } from './changephoto-profile.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Changephoto Profile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: ChangephotoProfileAtom,
  props: {

  }
})
import { RdProfileInfoPersonalItemAtom } from './rd-profile-info-personal-item.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Rd Profile Info Personal Item'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: RdProfileInfoPersonalItemAtom,
  props: {

  }
})
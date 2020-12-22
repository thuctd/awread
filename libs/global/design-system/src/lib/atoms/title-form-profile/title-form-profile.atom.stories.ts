import { TitleFormProfileAtom } from './title-form-profile.atom';
import { GlobalDesignSystemAtomicModule } from '../../global-design-system-atomic.module';

export default {
  title: 'Design System/Atoms/Title Form Profile'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [GlobalDesignSystemAtomicModule]
  },
  component: TitleFormProfileAtom,
  props: {

  }
})